import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user: SocialUser = new SocialUser();
  loggedIn: boolean = false;
  events: Event[] = [];
  selectedEvent: Event | undefined;
  selectedEventIndex: number = -1;
  registeredEvents: Event[] = [];
  selectedTab: number = 1;
  
  constructor(private authService: SocialAuthService, private eventService: EventService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      // if(this.loggedIn)
      //   localStorage.setItem('user', this.user.authToken);
    });

    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
      if(this.events.length !== 0){
        this.selectedEvent = this.events[0];
        this.selectedEventIndex = 0;
      }

    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  toggleEvent(event: Event){
    this.selectedEvent = event;
    this.selectedEventIndex = this.events.findIndex((e) => event === e);
  }

  registerFor(event: Event | undefined){
    if(event === undefined) return ;

    this.registeredEvents = [... this.registeredEvents, event ];
  }

  unregister(event: Event | undefined){
    if(event === undefined) return ;

    this.registeredEvents = this.registeredEvents.filter((e) => e !== event);
  }

  checkAlreadyRegistered(event: Event | undefined){
    if(event === undefined) return undefined;

    return this.registeredEvents.findIndex((e) => e === event) !== -1;
  }

  switchTab(tab_number: number){
    this.selectedTab = tab_number;
    this.selectedEvent = undefined;
  }
}
