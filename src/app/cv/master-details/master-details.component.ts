import { Component, OnDestroy } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent implements OnDestroy  {
  cvs$: Observable<Cv[]>
  signal$ = new Subject<string>();
  // subscription: Subscription;
  constructor(private cvService: CvService, private router: Router, private acr: ActivatedRoute) {
    this.cvs$ = this.cvService.getCvs();
    // this.subscription =
    this.cvService.selectCv$
      // .pipe(takeUntilDestroyed())
      .pipe(takeUntil(this.signal$))
      .subscribe((cv) =>
        this.router.navigate([cv.id], { relativeTo: this.acr })
    );
  }
  ngOnDestroy(): void {
    this.signal$.next('c est fini');
    this.signal$.complete();
    // this.subscription.unsubscribe();
  }
}
