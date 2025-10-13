import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../data-access/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }
}
