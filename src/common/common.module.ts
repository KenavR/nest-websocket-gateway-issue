import { Module, DynamicModule } from '@nestjs/common';
import { CommonGateway } from './common.gateway';
import { CommonService } from './common.service';

@Module({
  imports: [],
  providers: [CommonGateway, CommonService],
  exports: [CommonService],
})
export class CommonModule {
  static forFeature(): DynamicModule {
    return {
      module: CommonModule,
      providers: [CommonService],
      exports: [CommonService],
    };
  }
}
