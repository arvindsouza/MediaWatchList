import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MediaList } from './media.component';
import { FormComponent } from './form.component';

const appRoutes: Routes = [
    { path:'add', component: FormComponent, data: { state: 'form' } },
    { path: ':medium', component: MediaList, data: { state: 'media' } },
    { path:'', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);