/*
  
ng g m order --routing

ng g c order/components/order

*/

/*
order-routing.module.ts
        routes: Routes = [
            {
                path: '',
                component: OrderComponent
            }
        ]

app-routing.module.ts
   {
       path: 'order',
       loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
   }

*/

/*
  a routerLink="/order"
*/

/*
  order.component.ts

   products$: Observable<Product[]> = [];

   this.products$ =  this.cartService.cart$


=> template
  
 <ul>
    <li *ngFor= "let product of (procts$ | async)">
      {{product.title}}
    </li>
 <ul>
*/

/*
 de angular material, el "stepper" me permite partir un formulario en varios pasos

*/

/*
 MatStepperModule => @angular/material/stepper;

 => template
 
 <mat-horizontal-stepper>
   <mat-step>
      <ng-template matStepLabel>Sus productos</ng-template>
      <div *ngIf="(products$ | async) as products">
       <p *ngIf="products.length === 0">no hay productos</p>
        <ul>
            <li *ngFor= "let product of products">
            {{product.title}}
            </li>
        <ul>
      </div>
    </mat-step>
   <mat-step>
      <ng-template matStepLabel>Datos personales</ng-template>
      <h1>contenido</h1>
    </mat-step>    
   <mat-step>
      <ng-template matStepLabel>Pagos</ng-template>
      <h1>contenido</h1>
    </mat-step>        
 </mat-horizontal-stepper>


*/