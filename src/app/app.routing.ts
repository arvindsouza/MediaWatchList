import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MediaList } from './media.component';
import { FormComponent } from './form.component';

const appRoutes: Routes = [
    { path:'add', component: FormComponent },
    { path: ':medium', component: MediaList },
    { path:'', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);