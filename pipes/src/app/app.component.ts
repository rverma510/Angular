import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promise:Promise<any>;
  title = 'RAghav';
  myDate:Date = new Date();
  myMoney:number = 200;
  myObj = {name:"John",
          salary:10000};
  myNumber:number = 1000.12345;
  stock:number = 3.5532;
  numbers:number[] = [10, 20, 30, 40, 50];

  constructor(){
    this.promise = this.getPromise();
  }

  getPromise(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>resolve("Promise Response"), 2000);
    });
  }
}
