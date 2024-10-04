import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { CharactersModel } from "./characters.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([CharactersModel])],
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule {}
