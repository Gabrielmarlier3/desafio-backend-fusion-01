import { Module } from '@nestjs/common';
import { StarSystemsService } from './star-systems.service';
import { StarSystemsController } from './star-systems.controller';

@Module({
  providers: [StarSystemsService],
  controllers: [StarSystemsController]
})
export class StarSystemsModule {}
