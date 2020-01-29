//puedes dividir tu applicación como componentes de lego.
//components/
//   product.component.ts

import {Componet} from '@angular/core';
import {Product} from '../product.model';

@Componet({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent{
   product: Product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla'
   }
}

//    product.component.html
<h3>{{Product.title}}</h3>
<img [src]="product.image" alt="">
<strong>{{Product.price}}</strong>

//app.module.ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './components/product.component';

@NgModule({
    declarations: [AppComponent,
        ProductComponent
    ],
    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}


// *ngFor
//app.component.ts

import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
    templateUrl:`./app.component.html`
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

//app.component.html

<input type="text" [(ngModel)] = "title">
{{title}}
<app-product></app-product>

<div *ngIf=" title === 'nicolas' ">
   este es nicolas       
</div>
<div *ngIf=" title === 'julian' ">
   este es julian       
</div>
<div *ngIf=" title === 'camilo' ">
   este es camilo       
</div>

<div
   [ngSwitch]="title"
>
   <p *ngSwitchCase="'nicolas'">este es nicolas</p>
   <p *ngSwitchCase="'julian'">este es julian</p>
   <p *ngSwitchCase="'camilo'">este es camilo</p>
   <p *ngSwithDefault>No hay match</p>
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