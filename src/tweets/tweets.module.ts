import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { Tweet } from './entities/tweet.entity';
import { TweetsServiceService } from './tweets-service/tweets-service.service';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService, TweetsServiceService],
})
export class TweetsModule {}
