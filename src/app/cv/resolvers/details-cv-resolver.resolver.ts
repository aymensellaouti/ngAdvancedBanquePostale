import { ResolveFn } from '@angular/router';
import { Cv } from '../model/cv';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';

export const detailsCvResolverResolver: ResolveFn<Cv> = (route, state) => {
  const cvService = inject(CvService);
  const id = route.params['id'];
  return cvService.getCvById(id);
};


// import { Cv } from '../model/cv';

// @Injectable({
//   providedIn: 'root',
// })
// export class DetailCvResolverResolver implements Resolve<Cv> {
//   constructor(private cvService: CvService) {}
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Cv> {
//     return this.cvService.getCvById(+route.params['id']);
//   }
// }
