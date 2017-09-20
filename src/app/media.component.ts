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
    medium: any;
    mediaFiltered: any;
    response: any;
    clickedindex: any;
    keyword: any;
    
    constructor(private activatedroute: ActivatedRoute,
    private mediaitemservice: MediaService
    ){ }

    async ngOnInit(){
        this.response =  await this.mediaitemservice.get();
        this.media = this.response.json(); 
        this.activatedroute.params.subscribe(
            params =>{
               this.medium = params['medium'];
              if(this.medium.toLowerCase()=='all'){
                  this.medium = '';
              }
              //Change contents based on category selection
            if(this.medium != ''){
                 this.mediaFiltered =this.response.json(); 
                 var i = 0;
                 while(i<this.mediaFiltered.length){
                   if(this.mediaFiltered[i].category != this.medium ){
                       let index = this.mediaFiltered.indexOf(this.mediaFiltered[i]);
                       this.mediaFiltered.splice(index,1);
                   }
                   else
                       i++;  
                }
              }
              else{
                  this.mediaFiltered = this.response.json();            
              }
            }
        );

        
    }  
    
   async statusChange(value){
        value.status= !value.status;
        this.response =  await this.mediaitemservice.update(value);
    }

     async Delete(value){
        this.response = await this.mediaitemservice.delete(value);
        let index = this.mediaFiltered.indexOf(value);
        this.clickedindex = index;
        this.mediaFiltered.splice(index,1);
    }

   
}