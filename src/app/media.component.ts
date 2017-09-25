import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { MediaService } from './mediaItems.service';
import { LoginRegService } from './LoginReg.service';
;
@Component({
    selector: 'media',
    templateUrl: '../html/media.component.html',
    styleUrls: ['../css/media.component.css'],
})

export class MediaList {
    media: any;
    medium: any;
    mediaFiltered: any;
    response: any;
    clickedindex: any;
    keyword: any;
    loggedIn: boolean;

    constructor(private activatedroute: ActivatedRoute,
        private mediaitemservice: MediaService,
        private logreg: LoginRegService,
        private route: Router      
    ) { 
        if(sessionStorage['loggedin']=='false'){
            this.route.navigate(['/Login-Register']);
          }
    }

    async ngOnInit() {
        this.response = await this.mediaitemservice.get();
        this.media = this.response.json();
        this.activatedroute.params.subscribe(
            params => {
                this.medium = params['medium'];
                if (this.medium.toLowerCase() == 'all') {
                    this.medium = '';
                }
                //Change contents based on category selection
                if (this.medium != '') {
                    this.mediaFiltered = this.response.json();
                    var i = 0;
                    while (i < this.mediaFiltered.length) {
                        //    this.mediaFiltered[i].imageUrl = this.sanitization.bypassSecurityTrustStyle(this.mediaFiltered[i].imageUrl);
                        if (this.mediaFiltered[i].category != this.medium) {    //Hide items not in selected category
                            let index = this.mediaFiltered.indexOf(this.mediaFiltered[i]);
                            this.mediaFiltered.splice(index, 1);
                        }
                        else
                            i++;
                    }
                }
                else {
                    this.mediaFiltered = this.response.json();
                }
            }
        );


    }

    async statusChange(value) {
        value.status = !value.status;
        this.response = await this.mediaitemservice.update(value);
    }

    async Delete(value) {
        this.response = await this.mediaitemservice.delete(value);
        let index = this.mediaFiltered.indexOf(value);
        this.clickedindex = index;
        this.mediaFiltered.splice(index, 1);
    }

    returnLoggedin(){
        if(sessionStorage['loggedin']=='true'){
            this.loggedIn = true;
        }
        else
        this.loggedIn = false;

        return this.loggedIn;
    }

    logout(){
        this.logreg.signOut();
       // this.returnLoggedin();
    }

}