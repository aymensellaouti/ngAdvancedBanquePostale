import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffect } from "./store/todo.effects";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    TodoRoutingModule,
    FormsModule,
    CommonModule,
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([TodoEffect])
  ],
})
export class TodoModule {}
