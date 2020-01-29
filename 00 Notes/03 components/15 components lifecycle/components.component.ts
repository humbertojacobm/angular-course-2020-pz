//constructor: crea el componente y pone la interfaz
//ngOnChanges: detecta el cambio en el componente, por inputs, tienes el estado nuevo y el actual.
     // estas esta trayendo constantemente el valor actual y el valor anterior.

//ngOnInit: solo una vez, una vez cargado la interfaz, el componente es estable y ya podriamos llamar a rest api.
//ngDoCheck: 
   // actua con el ngOnChanges, pero totalmente customizado.
   // detección de cambios de forma forzada.
   //los componentes hijos se inicializan y se ponen en interfaz.
   //  ngAfterContentInit: 
   //  ngAfterContentChecked
   //  ngAfterViewInit
   //  ngAfterViewChecked
//ngOnDestroy: los componentes son quitados de la interfaz. se suele usar para anular subjects, emitters, observables.
     //sirve para poder desuscribirte de los recursos.

     
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

import {Componet, 
      Input, 
      OutPut, 
      EventEmitter, 
      OnChanges,
      SimpleChanges,
      OnInit,
      DoCheck,
      OnDestroy
    } from '@angular/core';
import {Product} from '../product.model';

@Componet({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements 
                                        //OnChanges,
                                        OnInit,
                                        DoCheck,
                                        OnDestroy
                                        {
   @Input() product: Product;
   @OutPut() productClicked: EventEmitter<any> = new EventEmitter();

   constructor(){
       console.log('1. constructor');
   }

//    ngOnChanges(changes: SimpleChanges){
//        console.log('2. ngOnChanges');
//        console.log(changes);
//    }

   ngOnInit(){ 
       console.log('3. ngOnInit');
       //you can connect with http request to connect with web api, rest api.
   }

   ngDoCheck(){
      console.log('4. ngDoCheck');
   }

   ngOnDestroy(){
    console.log('5. ngOnDestroy');
   }

   addCart(){
       console.log('añadir al carrito');
       this.productClicked.emit(this.product.id);
   }
}


