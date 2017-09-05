import { Component,Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class AppComponent {


  title = 'app';

  course: string;
  state: string = 'inactive';
  courses: any;
  display: boolean = false;

  constructor(){

    this.courses = [
      'Maths', 'Science', 'History'
    ]
  }

  showSection(item){
    this.display = !this.display;
  }

  togglestate(){
    if(this.state == 'inactive')
      this.state = 'active';
    else
      this.state = 'inactive'
  }
}


