import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events = [
    { id: 1, title: 'Concert Jazz', date: '2025-11-10', address: 'Tunis', description: 'Soirée jazz avec des artistes tunisiens.' },
    { id: 2, title: 'Exposition d’art', date: '2025-11-20', address: 'Sousse', description: 'Exposition moderne d’artistes locaux.' },
    { id: 3, title: 'Marathon Carthage', date: '2025-12-01', address: 'Carthage', description: 'Course caritative annuelle.' },
  ];

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find(e => e.id === id);
  }
}
