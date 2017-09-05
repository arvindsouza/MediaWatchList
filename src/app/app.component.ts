import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  title = 'app';

  course: string;
  courses: any;
  display: boolean = false;

  constructor(){

    this.courses = [
      'Maths', 'Science', 'History'
    ]
  }

  showSection(){
    this.display = !this.display;
  }
}
