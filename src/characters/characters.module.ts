import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { CharactersModel } from "./characters.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { PlanetsModule } from "../planets/planets.module";

@Module({
  imports: [SequelizeModule.forFeature([CharactersModel])],
  providers: [CharactersService, PlanetsModule],
  controllers: [CharactersController]
})
export class CharactersModule {}
