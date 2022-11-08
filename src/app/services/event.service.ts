import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Observable<Event[]>;
  constructor(private http: HttpClient) { 
    this.events = this.getEvents();
  }

  getEvents(){
    return this.http.get<Event[]>('backend/events.json');
  }
}
