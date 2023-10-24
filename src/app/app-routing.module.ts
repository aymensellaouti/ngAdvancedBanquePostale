import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'rh', component: RhComponent },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
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
