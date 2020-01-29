//app.module.ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}


//app.component.ts

import {Component} from '@angular/core';


@Component({
    template:`
      <input type="text" [(ngModel)] = "title">
      {{title}}
    `
})
export class AppComponent{
    title = 'Humbert-store'
}