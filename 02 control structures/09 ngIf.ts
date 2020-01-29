//*ngIf
//app.component.ts

import {Component} from '@angular/core';


@Component({
    template:`
      <input type="text" [(ngModel)] = "title">
      {{title}}
      <div *ngIf=" 1 ==1 ">
         este es un div
      </div>
      <div *ngIf=" 1 !=1 ">
         este es un div
      </div>
      <div *ngIf=" title !== 'nicolas' ">
         este es un div
      </div>
      <div *ngIf=" title === 'nicolas' ">
         este es un div
      </div>
    `
})
export class AppComponent{
    title = 'Humbert-store'
}