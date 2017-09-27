import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, query, group, stagger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router'

import { LoginRegService } from './LoginReg.service';

@Component({
    selector: 'landing',
    templateUrl: '../html/LandingPage.html'
})

export class AppComponent{
    getstate(outlet) {
        return outlet.activatedRouteData.state;
    }
    
      constructor(
        private theroute: Router,
        private login: LoginRegService
      ){}
    
    }