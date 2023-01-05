import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TweetsModule } from './tweets/tweets.module';
import { BullModule } from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.jsqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    TweetsModule,
    MailingModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
