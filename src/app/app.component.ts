import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, query, group, stagger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('*<=>*', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':enter',stagger( 600, [style({ transform: 'translateX(-5%)', opacity: 0 }),
          animate('.3s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))]), { optional: true }),
          query(':leave', stagger(600, [style({ transform: 'translateX(0%)', opacity: 1 }),
          animate('0.3s ease-in-out', style({ transform: 'translateX(-5%)', opacity: 0 }))]), { optional: true })
        ])
      ])
    ])
  ]
})

export class LandingPage {
   potato: any ;

  ngOnInit(){
    sessionStorage['loggedin'] ? this.potato = true:sessionStorage.setItem('loggedin', 'false');
  }

  title = 'app';

  course: string;
  state: string = 'inactive';
  test: any;

  public selectedItem: string;



  onSelect(item: string) {
    this.selectedItem = item;
  }

  getstate(outlet) {
    return outlet.activatedRouteData.state;
  }


  constructor(
    private theroute: Router
  ){}

}


