import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  courses: string[];
  students: object[];
  constructor() { 
    this.courses = ["Angular", "React", "Node"];
    this.students = [
      {
        fname: "Raghav",
        lname: "Verma",
        age: 20
      },
      {
        fname: "Rahul",
        lname: "Pathak",
        age: 21
      }
    ]
  }

  ngOnInit(): void {
  }

}
