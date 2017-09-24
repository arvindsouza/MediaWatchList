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
    styleUrls: ['../css/formStyle.css'],
    animations: [
        trigger('Submit', [
            transition('*<=>*', animate(
                '1s ease-out', style({ fill: '#56E81A' })
            ))
        ])
    ]
})


export class FormComponent {

    form: FormGroup;
    display: boolean = true;
    medialist: MediaList;
    hasBeenSubmitted: boolean = false;
    animate: boolean = false;

    message = {
        'name': '',
        'something': ''
    }

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private http: Http,
        private mediaservice: MediaService
    ) {
        this.form = fb.group({
            name: ['', Validators.required],
            category: [''],
            platform: [''],
            status: ['']
        })
    }

    async onSubmit(value) {
        this.mediaservice.add(value);
        this.hasBeenSubmitted = true;
    }

    animation() {
        this.animate = !this.animate;
        this.hasBeenSubmitted = true;
    }
}