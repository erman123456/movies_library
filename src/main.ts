import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  await app.listen(3000, function () {
    console.log(
      'Express server listening on port %d in %s mode',
      this.address().port,
    );
  });
}
bootstrap();
