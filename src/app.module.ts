import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventService } from './event.service';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  providers: [AppService, EventService, PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
