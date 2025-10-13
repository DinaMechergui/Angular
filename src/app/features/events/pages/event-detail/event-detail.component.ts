import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../data-access/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventsService.getEventById(id);
  }
}
