import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./store/reducers";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    TodoRoutingModule,
    FormsModule,
    CommonModule,
    StoreModule.forFeature('todo', todoReducer)
  ],
})
export class TodoModule {}
