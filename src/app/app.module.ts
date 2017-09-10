import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchPipe } from './pipe.search';
import { FormComponent } from './form.component'

@NgModule({
  declarations: [
    AppComponent, SearchPipe, FormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
