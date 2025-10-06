import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/event';

@Pipe({
  name: 'filterEvent'
})
export class FilterEventPipe implements PipeTransform {
  transform(events: Event[], searchText: string): Event[] {
    if (!events || !searchText) {
      return events;
    }
    return events.filter(e =>
      e.title.toLowerCase().includes(searchText.toLowerCase()) ||
      e.location.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}