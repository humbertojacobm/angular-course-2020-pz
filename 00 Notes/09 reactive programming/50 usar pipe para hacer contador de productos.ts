/**
 * cuando hay un flujo de datos activo como el uso de una BehaviorSubect
 * podemos usar pipes de rxjs (map) para poder reprocesarlo.
 * 
 */

 /*
  map -> rxjs/operators

  * recuerda un pipe es mas sofisticado que un subscribe.

  header.component.ts
     map -> rxjs/operators

     this.cartService.cart$
     .pipe(
         map(products => products.length)
     )
     .subscribe(total => {
         this.total = total;
     })
 */

 /*
  * queremos que angular maneje la subscripción mas eficientemente
  
  products.component.ts

    Observable -> rxjs
    convertitomos total -> total$ : Observable<number>();


    this.total$ = this.cartService.cart$
    .pipe(
        map(products => products.length)
    )

  => template

  "total$ | async"
   
  en esta forma se desuscribe solo sin necesidad de usar un ngDestroy.
  
 */