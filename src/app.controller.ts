import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '@prisma/client';

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly eventService: EventService) { }

  @Post('events')
  async create(
    @Body() postData: { name: string; location: string; date: string },
  ): Promise<Event> {
    const { name, location, date } = postData;
    return this.eventService.createEvent({
      name,
      location,
      date,
    });
  }

  @Get('events')
  async getEvents(): Promise<Event[]> {
    return this.eventService.getEvents();
  }

  @Delete('events/:id')
  async deletePost(@Param('id') id: string): Promise<Event> {
    return this.eventService.deleteEvent({ id: Number(id) });
  }
}
