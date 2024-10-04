import { Module } from '@nestjs/common';
import { StarSystemsService } from './star-systems.service';
import { StarSystemsController } from './star-systems.controller';
import { StarSystemsModel } from "./star-systems.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([StarSystemsModel])],
  providers: [StarSystemsService],
  controllers: [StarSystemsController]
})
export class StarSystemsModule {}
