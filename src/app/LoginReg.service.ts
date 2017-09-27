import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

declare const gapi: any;

@Injectable()
export class LoginRegService {

    loggedin: boolean = false;
    public auth2: any;
    private clientId = '99080391518-sgfc9sur80b8mgv3g4jt5jbcg4p15f1v.apps.googleusercontent.com';
    private scope = [
        'profile',
        'email',
    ].join(' ');
    token: any = {
        tokens: '',
        logged: ''
    };

    googleInit(item) {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope,
            });
            //   that.attachSignin(that.element.nativeElement.firstChild);
            that.attachSignin(document.getElementById(item));
        });
    }

    attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            let profile = googleUser.getBasicProfile();
            console.log('Name: ' + profile.getName());
             that.token.tokens = googleUser.getAuthResponse().id_token;
             that.token.logged = true;
            that.http.post('http://localhost:5000/api/clienttoken', that.token).toPromise();   
            sessionStorage.setItem('loggedin', 'true');      
            that.route.navigate(['/app']);            
        })
    }

    signOut(){
        let that = this;
        this.auth2 = gapi.auth2.getAuthInstance();
        this.auth2.signOut().then(
            ()=>{
                that.token.logged = false;
                that.http.post('http://localhost:5000/api/clienttoken', that.token).toPromise();                   
                sessionStorage.setItem('loggedin', 'false');
            }
        )
        this.auth2.disconnect();
    }

    constructor(
        private http: Http,
        private route: Router
    ) {}
}