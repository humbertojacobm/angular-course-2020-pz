// *ngFor
//app.component.ts

import {Component} from '@angular/core';
import {Product} from './product.model';

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

      <div
         *ngFor="let product of products; index as i">
         {{product.title}}
         <img [src]="product.image" alt="">
         {{product.price}}         
      </div>

    `
})
export class AppComponent{
    title = 'Humbert-store';
    items = ['nicolas','julian', 'perez'];
    products: Product[] = [
        {
            id: '1',
            image: 'assets/images/camiseta.png',
            title: 'Camiseta',
            price: 80000,
            description: 'bla bla bla bla'
        }
];

    addItem(){
        this.items.push('nuevo item');
    }

    deleteItem(index: number){
        this.items.splice(index,1);
    }
}
// a good practice is type the objects using interces.
//product.model.ts
export interface Product{
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;    
}