import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
