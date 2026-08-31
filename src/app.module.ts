import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmountModule } from './amount/amount.module';

@Module({
  imports: [AmountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
