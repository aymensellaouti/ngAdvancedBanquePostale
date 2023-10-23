import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { RouterModule } from "@angular/router";
import { canLeaveTodoGuard } from "./guards/can-leave-todo.guard";
import { TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TodoComponent],
  imports: [TodoRoutingModule, FormsModule, CommonModule],
})
export class TodoModule {}
