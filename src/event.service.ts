import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  async createEvent(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  async getEvents(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async deleteEvent(where: Prisma.EventWhereUniqueInput): Promise<Event> {
    return this.prisma.event.delete({
      where,
    });
  }
}
