import { Component,Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css'],
  animations: [
    trigger('heroState', [
      state('pin', style({
        opacity: 1
      })),
      transition('void => *', [style({ opacity:0 }), animate('100ms 50ms')]),
      transition('* => void', [animate('100ms'), style({ opacity:0 })])
    ])
  ]
})

export class AppComponent {


  title = 'app';

  course: string;
  state: string = 'inactive';

  public selectedItem: string;

  

  onSelect(item: string){
    this.selectedItem = item;
  }

}


