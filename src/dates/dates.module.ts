import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { DatesGateway } from './dates.gateway';

@Module({
  imports: [CommonModule.forFeature()],
  providers: [DatesGateway],
})
export class DatesModule {}
