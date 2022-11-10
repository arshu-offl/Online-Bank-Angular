import { Component, OnInit } from '@angular/core';

export interface NavType {
  itemId: number,
  itemText: string,
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'online-bank-angular';
  items: NavType[] = [];

  ngOnInit() {
    this.items = [
      { "itemId": 1, "itemText": "Fund Transfer", "link": "fundTransfer" },
      { "itemId": 2, "itemText": "Open New FD", "link": "openfd" },
      { "itemId": 3, "itemText": "Events", "link": "events" },
      { "itemId": 4, "itemText": "Log In", "link": "login" },
      { "itemId": 5, "itemText": "Sign up!", "link": "register" }
    ]

    this.items = this.items.reverse()
  }
}
