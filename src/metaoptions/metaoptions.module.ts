import { Module } from '@nestjs/common';
import { MetaoptionsController } from './metaoptions.controller';
import { MetaoptionsService } from './metaoptions.service';

@Module({
  controllers: [MetaoptionsController],
  providers: [MetaoptionsService]
})
export class MetaoptionsModule {}
