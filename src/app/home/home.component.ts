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
  IMG1 = "assets/home-img/1.jpg";
  IMG2 = "assets/home-img/2.jpg";
  IMG3 = "assets/home-img/3.jpg";
  IMG4 = "assets/home-img/4.jpg";
  IMG6 = "assets/home-img/6.jpg";
  faCoffee = faCoffee;
  constructor() { 
    library.add(fas);
  }

  ngOnInit() {
    
  }

}
