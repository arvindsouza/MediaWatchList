import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './Landing.component';
import { MediaList } from './media.component';
import { FormComponent } from './form.component';
import { LoginRegComponent } from './Login.component';
import { LandingPage } from './app.component';

const appRoutes: Routes = [
    { path: 'Login-Register', component: LoginRegComponent , data:{ state: 'login' } },
     { path: 'app', component: LandingPage, data: { state: 'app' },
       children: [
        { path: 'add', component: FormComponent, data: { state: 'form' }},
        { path: ':medium', component: MediaList, data: { state: 'media' } }
         ]
     },       
    { path: '', pathMatch: 'full', redirectTo: '/Login-Register' }
];

export const routing = RouterModule.forRoot(appRoutes);