import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const canLeaveTodoGuard: CanDeactivateFn<TodoComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.todo.name.trim() || component.todo.content.trim()) {
    return confirm('Etes vous sur de vouloir quitter le gestionnaire des todos')
  }
  return true;
};
