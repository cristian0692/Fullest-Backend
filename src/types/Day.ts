import { DayEventDto } from "./DayEventDto.ts";

export class Day {
  constructor(date: Date, startTime: string, endTime: string, events: DayEventDto[]) {
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.events = events;
  }

  date: Date;
  startTime: string;
  endTime: string;
  events: DayEventDto[];
}
