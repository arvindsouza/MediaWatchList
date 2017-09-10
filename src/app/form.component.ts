import { Component, Inject, Injectable } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';

@Component({
    selector: 'theForm',
    templateUrl: '../html/formComponent.html',
    styleUrls:['../css/formStyle.css'],
    animations:[
        trigger('Init',[
           state('one', style({
               height: '165px'
           })),
           transition('void => *', [ style({height: '0px'}), animate('100ms') ]),
           transition('* => void', [ animate('200ms'), style({height: '0px'})]) 
        ])
    ]
})

@Injectable()
export class FormComponent{

    form: FormGroup;
    display: boolean = true;

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private http: Http
    ){
        this.form = fb.group({
            name: ['', Validators.required],
            last: [''],
            emails: ['', Validators.email]
        })
     }

     onSubmit(value){
      console.log(value);
      this.display = false;

      return this.http.post('http://localhost:5000/api/message', value).map(
          Response => {
              return Response.json().value;
          }
      )
      .subscribe(res => console.log('ih'), er => console.log('error')) ;
    
    }
}