import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public title:String;
  constructor() { 
    this.title = 'Hospital de Traumatologia y Ortopedia Lomas verdes';
  }

  ngOnInit() {
  }

}
