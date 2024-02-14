import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { consoleColors } from './constants';
import { LoggerHelper } from './logger';

@Injectable()
export class ApiInterceptor implements NestInterceptor {
  logger: LoggerHelper;

  constructor() {
    this.logger = new LoggerHelper('ApiInterceptor');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    req.transactionId = new Date().getTime();
    this.logger.log(
      req.transactionId,
      `REQ ${req.method} ${req.url} ${
        req.method !== 'GET' ? JSON.stringify(req.body) : ''
      }`,
    );

    const now = Date.now();
    return next.handle().pipe(
      tap(
        () =>
          this.logger.log(
            req.transactionId,
            `RES ${res.statusCode} ${consoleColors.fg.yellow}+${
              Date.now() - now
            }ms`,
          ),
        (error: Record<string, unknown>) =>
          this.logger.error(
            req.transactionId,
            `RES ${error.status || 500} ${error.message} ${
              consoleColors.fg.yellow
            }+${Date.now() - now}ms`,
          ),
      ),
    );
  }
}
