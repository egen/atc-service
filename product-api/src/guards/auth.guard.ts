import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    if (req.headers && req.headers.authorization) {
      let accessToken = req.headers.authorization;
      if (
        (req.headers.authorization.split(' ')[0] || '').toLowerCase() ===
        'bearer'
      ) {
        accessToken = req.headers.authorization.split(' ')[1];
      }
      try {
        // Validate and decode JWT access token and assign the decoded token object to request
        req.accessToken = accessToken;

        return true;
      } catch (err) {
        console.error('JWT validation error', err);
        return false;
      }
    } else {
      if (['/health', '/api/health'].includes(req.path)) {
        return true;
      }

      return false;
    }
  }
}
