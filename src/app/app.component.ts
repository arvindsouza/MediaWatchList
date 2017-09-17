import { Component,Input } from '@angular/core';
import { trigger, state, style, transition, animate, query, group } from '@angular/animations';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('*<=>*', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), { optional: true }),
        group([
          query(':enter', [style({ transform: 'translateX(5%)', opacity: 0 }), 
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))], { optional: true }),
        query(':leave', [style({ transform: 'translateX(0%)', opacity: 1 }), 
      animate('0.5s ease-in-out', style({ transform: 'translateX(-5%)', opacity:0 }))], { optional: true })
        ])
      ])
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

  getstate(outlet){
    return outlet.activatedRouteData.state;
  }

}


