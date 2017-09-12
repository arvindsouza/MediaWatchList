import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { MediaService } from './mediaItems.service';
;
@Component({
    selector: 'media',
    templateUrl: '../html/media.component.html',
    styleUrls: [ '../css/media.component.css' ],
})

export class MediaList{

    media: any;

    constructor(private activatedroute: ActivatedRoute,
    private mediaitemservice: MediaService
    ){ }

    ngOnInit(){
        this.activatedroute.params.subscribe(
            params =>{
              let medium = params['medium'];
              if(medium.toLowerCase()=='all'){
                  medium = '';
              }
            }
        );

        this.media = this.mediaitemservice.get();
    }  
    
    statusChange(value){
        if (value.status == false)
         value.stat = 'done';
        else
            value.stat = 'not done';
    }
}