import { getCurrentInvoke } from '@codegenie/serverless-express';
import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class AuthPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    const { event } = getCurrentInvoke()
    const claims = event?.requestContext?.authorizer?.claims

    return {
      claims,
      username: claims?.["cognito:username"]
    };
  }
}
