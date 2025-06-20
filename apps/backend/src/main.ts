import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(3000, '0.0.0.0');

=======
  await app.listen(process.env.PORT ?? 3000);
>>>>>>> 1ce9123e786b5a5ac2fe48e15e625a1ab1974b07
}
bootstrap();
