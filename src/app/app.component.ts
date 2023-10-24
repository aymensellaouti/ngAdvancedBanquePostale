import { ApplicationRef, Component, Inject } from '@angular/core';
import { CvService } from './cv/services/cv.service';
import { LoggerService } from './services/logger.service';
import { LoggerInjectionToken } from './injection Tokens/injection.token';
import { Store } from '@ngrx/store';
import { AppState } from './NgRx';
import { distinctUntilChanged, map } from 'rxjs';
import { intitAppAction } from './NgRx/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<AppState>,
    private aref: ApplicationRef,
    private cvService: CvService, @Inject(LoggerInjectionToken) private loggerService: LoggerService[]) {
    this.store.dispatch(intitAppAction());
    //  1 23 3  4 5  6 7 8 9
    // 1 23 3 5 7 9
    this.store
    .select((state) => state.todo)
    .subscribe(
      appState => console.log({appStateUx: appState})
    );
      this.cvService.getCvs().subscribe(data => console.log(data))
    for (let i = 0; i<this.loggerService.length; i++) {
        this.loggerService[i].logger('cc');
  }
}
  detectChange() {
    this.store.dispatch(intitAppAction());
    // this.aref.tick();
  }
  // title = 'Starting Advanced Topics';
}
