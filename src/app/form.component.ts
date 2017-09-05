import { Component, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'theForm',
    templateUrl: '../html/formComponent.html',
    styleUrls:['../css/formStyle.css']
})

export class FormComponent{

    form: FormGroup;

    constructor(
        @Inject(FormBuilder) fb: FormBuilder
    ){
        this.form = fb.group({
            name: ['', Validators.required],
            emails: ['', Validators.email]
        })
     }
}