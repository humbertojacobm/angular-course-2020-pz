```bash
ng g c admin/components/product-list
```

la buena practica al usar material
es poner material en un solo modulo.
para en caso de una migración solo cambies el codigo en el modulo.

Al parecer material ya tiene

matGrid
matpaginator
matsort

La demo vamos ha hacer un demo basico de matTable y como usarlo.


product-list.componet.ts
```typescript

import { ProductsService } from './../../core/services/product.service'

@Component({})
export class ProductListComponent{
   
   products = [];
   displayedColumns: string[] = ['id','title','price', 'actions'];
   constructor(
       private productsService: ProductsService
   ){}

   ngOnInit(){
     this.fetchProducts();
   }

   fetchProducts(){
       this.productsService.getAllProducts()
       .subscribe(products => {
           this.products = products;
       });
   }

   deleteProduct(id: string){
       this.productsService.deleteProduct(id)
       .subscribe( response => {
           if(response){
               this.fetchProducts();
           }
       })
   }
}

```

Algunos elementos importantes son dataSource, que es el objeto que tendra la data
otro es el class="mat-elevation-z8" que crea una sombra en la tabla.

product-list.component.html
```HTML

<table 
  mat-table
  [dataSource]="products"
  class="mat-elevation-z8"
  class="products-table"
>
  <ng-container matColumnDef="id">
     <th mat-header-cell 
        *matHeaderCellDef>
       ID
     </th>
     <td mat-cell
         *matCellDef="let product">
       {{product.id}}
     </td>
  </ng-container>
  <ng-container matColumnDef="title">
     <th mat-header-cell 
        *matHeaderCellDef>
       TITLE
     </th>
     <td mat-cell
         *matCellDef="let product">
       {{product.title}}
     </td>
  </ng-container>  
  <ng-container matColumnDef="price">
     <th mat-header-cell 
        *matHeaderCellDef>
       PRICE
     </th>
     <td mat-cell
         *matCellDef="let product">
       {{product.price}}
     </td>
  </ng-container>  
  <ng-container matColumnDef="actions">
     <th mat-header-cell 
        *matHeaderCellDef>
       ACTIONS
     </th>
     <td mat-cell
         *matCellDef="let product">
       <button mat-button
               (click)="editProduct(product.id)">
         Editar
       </button>
       <button mat-raised-button
               color="warn"
               (click)="deleteProduct(product.id)">
         Eliminar
       </button>       
     </td>
  </ng-container>     
  <tr mat-header-row 
     *matHeaderRowDef="displayedColumns">
  </tr>
  <tr  mat-row
       *matRowDef="let row; columns: displayedColumns;">
  </tr>
</table>

```

```css
.products-table{
    width: 98%;
    margin: 2%;
}
```