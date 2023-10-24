import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { detailsCvResolverResolver } from './resolvers/details-cv-resolver.resolver';
import { listeCvResolver } from './resolvers/liste-cv.resolver';

const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    resolve: {
      cvs: listeCvResolver,
    },
  },
  {
    path: 'cv/list',
    component: MasterDetailsComponent,
    children: [
      {
        path: ':id',
        component: DetailsCvComponent,
        resolve: {
          cv: detailsCvResolverResolver,
        },
      },
    ],
  },
  { path: 'cv/add', component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: 'cv/:id',
    component: DetailsCvComponent,
    resolve: {
      cv: detailsCvResolverResolver,
    },
    data: {
      message: 'Bonjour la banque Postale',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule {}
