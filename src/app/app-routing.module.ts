import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MasterDetailsComponent } from "./cv/master-details/master-details.component";
import { detailsCvResolverResolver } from "./cv/details-cv-resolver.resolver";
import { listeCvResolver } from "./cv/liste-cv.resolver";
import { canLeaveTodoGuard } from "./todo/guards/can-leave-todo.guard";

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'rh', component: RhComponent },
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
    children: [{ path: ':id', component: DetailsCvComponent }],
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
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'word', component: MiniWordComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [],
    children: [{ path: 'color', component: ColorComponent }],
  },
  // { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
