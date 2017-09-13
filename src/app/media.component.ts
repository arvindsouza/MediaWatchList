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

    public media: any;

    constructor(private activatedroute: ActivatedRoute,
    private mediaitemservice: MediaService
    ){ }

    async ngOnInit(){
        this.activatedroute.params.subscribe(
            params =>{
              let medium = params['medium'];
              if(medium.toLowerCase()=='all'){
                  medium = '';
              }
            }
        );

        var response = await this.mediaitemservice.get();

        this.media = response.json(); 
    }  
    
    statusChange(value){
        if (value.status == false)
         value.stat = 'done';
        else
            value.stat = 'not done';
    }

   
}