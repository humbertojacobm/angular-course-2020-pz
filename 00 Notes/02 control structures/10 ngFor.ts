// *ngFor
//app.component.ts

import {Component} from '@angular/core';


@Component({
    template:`
      <input type="text" [(ngModel)] = "title">
      {{title}}
      <div *ngIf=" title === 'nicolas' ">
       este es un div       
      </div>

      <button (click)="addItem()"></button>

      <ul>
        <li *ngIf="items.length === 0">La lista esta vacía</li>
        <li *ngFor="let name of items; index as i">
          {{name}} {{i}}
          <button (click)="deleteItem(i)">Delete</button>
        </li>
      <ul>

    `
})
export class AppComponent{
    title = 'Humbert-store';
    items = ['nicolas','julian', 'perez'];

    addItem(){
        this.items.push('nuevo item');
    }

    deleteItem(index: number){
        this.items.splice(index,1);
    }
}