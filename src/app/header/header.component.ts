import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  menuSelected : string = 'home';
    onSelected(feature: string){
        this.featureSelected.emit(feature);
        this.menuSelected = feature;
    }
  constructor() { }

  ngOnInit() {
  }

}
