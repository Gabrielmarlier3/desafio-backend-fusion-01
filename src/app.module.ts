import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetsModule } from './planets/planets.module';
import { StarSystemsModule } from './star-systems/star-systems.module';
import { CharactersModule } from './characters/characters.module';
import { SpaceshipsModule } from './spaceships/spaceships.module';

@Module({
  imports: [PlanetsModule, StarSystemsModule, CharactersModule, SpaceshipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
