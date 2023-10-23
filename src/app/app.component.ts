import { Component, Inject } from '@angular/core';
import { CvService } from './cv/services/cv.service';
import { LoggerService } from './services/logger.service';
import { LoggerInjectionToken } from './injection Tokens/injection.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cvService: CvService, @Inject(LoggerInjectionToken) private loggerService: LoggerService[]) {
    this.cvService.getCvs().subscribe(data => console.log(data))
    for (let i = 0; i<this.loggerService.length; i++) {
        this.loggerService[i].logger('cc');
  }
}
  // title = 'Starting Advanced Topics';
}
