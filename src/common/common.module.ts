import { Module, DynamicModule } from '@nestjs/common';
import { CommonGateway } from './common.gateway';
import { CommonService } from './common.service';

@Module({})
export class CommonModule {
  static forRoot(): DynamicModule {
    return {
      module: CommonModule,
      imports: [],
      providers: [CommonGateway, CommonService],
      exports: [CommonService],
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: CommonModule,
      providers: [CommonService],
      exports: [CommonService],
    };
  }
}
