import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SearchPipe } from './pipe.search';
import { FormComponent } from './form.component'
import { MediaList } from './media.component';
import { LoginRegComponent } from './Login.component';
import { GoogleSignIn } from './Login.component'

import { MediaService } from './mediaItems.service';
import { LoginRegService } from './LoginReg.service';

import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent, SearchPipe, FormComponent, MediaList, LoginRegComponent, GoogleSignIn
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpModule, routing
  ],
  providers: [MediaService, LoginRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
