import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService{
    media: any;

    get(){
        this.media = this.http.get('http://localhost:5000/api/messages').toPromise();        
        return this.media;
    }

    add(mediaitem){
       // this.media.push(mediaitem);
       this.http.post('http://localhost:5000/api/message', mediaitem).toPromise();
    }

    delete(mediaitem){

    }

    constructor(
        private http: Http
    ){
   
          this.media = this.http.get('http://localhost:5000/api/messages').toPromise();
    }
    
}