import { Module } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';
import { SpaceshipsController } from './spaceships.controller';
import { SpaceshipModel } from "./spaceships.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([SpaceshipModel])],
  providers: [SpaceshipsService],
  controllers: [SpaceshipsController]
})
export class SpaceshipsModule {}
