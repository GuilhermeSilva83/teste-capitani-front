import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  apiUrl: string;
  production: boolean;

  constructor() {
    this.production = environment.production;
    this.apiUrl = environment.apiUrl;
  }


  ngOnInit(): void {
  }

}
