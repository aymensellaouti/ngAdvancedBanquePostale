import { InjectionToken } from "@angular/core";
import { TodoService } from "../todo/service/todo.service";
import { LoggerService } from "../services/logger.service";

export const TodoInjectionToken = new InjectionToken<TodoService>(
  'TODO_INJECTION_TOKEN'
);
export const LoggerInjectionToken = new InjectionToken<LoggerService>(
  'LOGGER_INJECTION_TOKEN'
);

export const UUID_TOKEN = new InjectionToken<() => string>('UUID_TOKEN');
