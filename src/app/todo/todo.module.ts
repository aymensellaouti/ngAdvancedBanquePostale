import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TodoComponent],
  imports: [TodoRoutingModule, FormsModule, CommonModule],
})
export class TodoModule {}
