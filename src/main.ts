import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthDevPipe } from './pipes/AuthDevPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new AuthDevPipe())
  await app.listen(3000);
}
bootstrap();
