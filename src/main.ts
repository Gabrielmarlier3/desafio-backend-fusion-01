import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(JSON.stringify(process.env.JWT_SECRET));

async function bootstrap(){
    const app = await NestFactory.create(AppModule);

    const sequelize = app.get(Sequelize);

    await sequelize.sync();

    const config = new DocumentBuilder()
        .setTitle('Star Wars API')
        .setDescription('Projeto de API para gerenciamento de planetas, sistemas estelares e personagens do universo de Star Wars')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'Bearer',
                bearerFormat: 'JWT'
            },
            'JWT-auth'
        )
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    await app.listen(3000);

}

bootstrap();
