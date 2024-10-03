import { Module } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';
import { SpaceshipsController } from './spaceships.controller';

@Module({
  providers: [SpaceshipsService],
  controllers: [SpaceshipsController]
})
export class SpaceshipsModule {}
