import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css','../app.component.css']
})
export class EventsComponent implements OnInit {
  IMG1 = "assets/events-img/events-cover.jpg";
  IMG2 = "assets/events-img/2.jpg";

  constructor() { }

  ngOnInit() {
  }

}
