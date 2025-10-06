import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
events: Event[] = [
  { 
    id: 1, 
    title: 'Conférence Angular', 
    location: 'Tunis', 
    date: new Date('2025-10-01'), 
    likes: 0, 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  },
  { 
    id: 2, 
    title: 'Hackathon AI', 
    location: 'Sfax', 
    date: new Date('2025-10-12'), 
    likes: 0, 
    imageUrl: 'https://static.wixstatic.com/media/cd042f_ce869fb700b146f09fa2e1ded54f7803~mv2.jpg/v1/fill/w_1152,h_720,al_c,q_85/AI%20HACKATHON%20Stacked%202024%20copy.jpg'
  },
  { 
    id: 3, 
    title: 'Salon IT', 
    location: 'Sousse', 
    date: new Date('2025-07-15'), 
    likes: 0, 
    imageUrl: 'https://www.bitse.tn/media/pages/21-banniere-IMG-20240731-WA0007.jpg'
  }
];


  searchText: string = '';

  like(event: Event) {
    if (new Date(event.date) >= new Date()) {
      event.likes++;
    }
  }

  isExpired(event: Event): boolean {
    return new Date(event.date) < new Date();
  }
}