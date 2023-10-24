import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { TodoService } from "src/app/todo/service/todo.service";
import { CONSTANTES } from "src/config/const.config";
import { FakeCvService } from "../services/fake-cv.service";
import { Observable, map } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
  // changeDetection: ChangeDetectionStrategy.Default
  providers: [{
    provide: CvService,
    useClass: CONSTANTES.fakeCvService ? FakeCvService: CvService
  }]
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.todoService.logTodos();
    this.cvs$ = this.activatedRoute.data.pipe(
      map( data => data['cvs'])
    );
    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
}
