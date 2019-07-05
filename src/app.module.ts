import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatesModule } from './dates/dates.module';

@Module({
  imports: [CommonModule.forRoot(), DatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
