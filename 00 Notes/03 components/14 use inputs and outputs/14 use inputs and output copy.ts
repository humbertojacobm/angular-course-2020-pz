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
    clickProduct(id: number){
        console.log('product');
        console.log(id);
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
//property binding
// event binding

import {Componet, Input, OutPut, EventEmitter} from '@angular/core';
import {Product} from '../product.model';

@Componet({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent{
   @Input() product: Product;
   @OutPut() productClicked: EventEmitter<any> = new EventEmitter();

   addCart(){
       console.log('añadir al carrito');
       this.productClicked.emit(this.product.id);
   }
}

