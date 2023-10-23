import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { canLeaveTodoGuard } from "./guards/can-leave-todo.guard";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'todo',
        component: TodoComponent,
        canDeactivate: [canLeaveTodoGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
