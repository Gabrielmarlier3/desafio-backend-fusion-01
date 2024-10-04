import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { PlanetModel } from "./planets.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { StarSystemsModule } from "../star-systems/star-systems.module";

@Module({
  imports: [SequelizeModule.forFeature([PlanetModel]), StarSystemsModule],
  providers: [PlanetsService],
  controllers: [PlanetsController],
  exports: [PlanetsService]
})
export class PlanetsModule {}
