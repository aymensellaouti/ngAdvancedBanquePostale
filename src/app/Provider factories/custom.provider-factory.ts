import { LoggerService } from "../services/logger.service";
import { TodoService } from "../todo/service/todo.service";

// export const provideTodoService = (loggerService: LoggerService) => {
//   return new TodoService(loggerService);
// }
export const provideLoggerService = () => {
  return new LoggerService();
}
