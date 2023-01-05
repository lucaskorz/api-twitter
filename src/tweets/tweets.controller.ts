import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.create(createTweetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.update(+id, updateTweetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.remove(+id);
  }
}
