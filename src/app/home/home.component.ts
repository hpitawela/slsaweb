import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../app.component.css']
})
export class HomeComponent implements OnInit {
  private IMG1 = "assets/home-img/1.jpg";
  private IMG2 = "assets/home-img/2.jpg";
  private IMG3 = "assets/home-img/3.jpg";
  private IMG4 = "assets/home-img/4.jpg";
  private IMG6 = "assets/home-img/6.jpg";
  faCoffee = faCoffee;
  constructor() { 
    library.add(fas);
  }

  ngOnInit() {
    
  }

}
