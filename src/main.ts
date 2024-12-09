import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('API Documentation') 
    .setDescription('The API description') 
    .setTermsOfService('http://termsofservice.com')
    .setLicense('MIT LICENSE',
      'https://github.com/git/git-scm.com/blob/gh-pages/MIT-LICENSE.txt')
    .setVersion('1.0') 
    .build();

  //Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
