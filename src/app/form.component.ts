import { Component, Inject, Injectable } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaList } from './media.component';

import { MediaService } from './mediaItems.service';

import 'rxjs/add/operator/toPromise';

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


export class FormComponent{

    form: FormGroup;
    display: boolean = true;
    medialist: MediaList;

    message = {
        'name':'',
        'something':''
    }

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private http: Http,
        private mediaservice: MediaService
    ){
        this.form = fb.group({
            name: ['', Validators.required],
            category: [''],
        })
     }

     async onSubmit(value){
      //this.display = false;  
      this.mediaservice.add(value);
      
    }
}