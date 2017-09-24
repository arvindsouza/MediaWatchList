import { Component, Inject, Injectable, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaList } from './media.component';

import { LoginRegService } from './LoginReg.service';

import 'rxjs/add/operator/toPromise';
declare const gapi: any;

@Component({
    selector: 'login',
    templateUrl: '../html/Login.html',
    styleUrls: ['../css/Login.css']
})


export class LoginRegComponent{

    regform: FormGroup;
    
    constructor(
        @Inject(FormBuilder) loginfb: FormBuilder        
    ){
        this.regform = loginfb.group({
            user: [],
            pwd: []
        })
    }

    
}

@Component({
    selector: 'googleSignIn',
    template: '<button id="TheButton" >Google Sign In</button>'
})

export class GoogleSignIn implements AfterViewInit  {
    private clientId = '99080391518-sgfc9sur80b8mgv3g4jt5jbcg4p15f1v.apps.googleusercontent.com';
    public auth2: any;
    private scope = [
        'profile',
        'email',
      ].join(' ');
    
       public googleInit(){
           let that = this;
          gapi.load('auth2', function(){
              that.auth2 = gapi.auth2.init({
               client_id : that.clientId,
               cookiepolicy: 'single_host_origin',
               scope: that.scope
              });
              that.attachSignin(that.element.nativeElement.firstChild);
          });
        }

        public attachSignin(element){
          let that = this;
          this.auth2.attachClickHandler(element, {}, function( googleUser ){
              let profile = googleUser.getBasicProfile();
              console.log('Name: ' + profile.getName());
          })
        }
    
        constructor(
            private element: ElementRef
        ){}

        ngAfterViewInit(){
            this.googleInit();
        }
    
}