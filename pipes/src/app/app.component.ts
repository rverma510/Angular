import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RAghav';
  myDate:Date = new Date();
  myMoney:number = 200;
  myObj = {name:"John",
          salary:10000};
  myNumber:number = 1000.12345;
}
