crear un component 
product-edit/product-edit.component.ts

product-edit.componet.html
```HTML
<form [formGroup]="form" ngSubmit="saveProduct($event)">
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                Productos
            </mat-card-title>
        </mat-card-header>  
        <mat-card-content>
          <div class="row">
            <div class="col-xs">
                <mat-form-field>
                    <input formControlName="title" 
                    matInput type="text"
                    placeholder="title">
                </mat-form-field>  
            </div>
          </div>    
          <div class="row">
            <div class="col-xs">
                <mat-form-field>
                    <input formControlName="price" 
                    matInput type="text"
                    placeholder="price">
                </mat-form-field> 
                <div *ngIf="priceField.errors && priceField.dirty">
                    <p *ngIf="priceField.hasError('price_invalid')">
                       No te debes pasar de 10000
                    </p>
                    <p *ngIf="priceField.hasError('required')">
                       Es obligatorio
                    </p>
                </div>
            </div>
          </div>        
          <div class="row">
            <div class="col-xs">
                <mat-form-field>
                   <textarea matInput
                     formControlName="description"
                     placeholder="Description">
                   </textarea>
                </mat-form-field>            
            </div>
          </div>             
        </mat-card-content>
        <mat-card-actions>
           <button mat-raised-button
            type="submit"
            [disabled]="form.invalid">
              Guardar
           </button>
        </mat-card-actions>
    </mat-card>
</form>
```

y en 
product-edit.component.ts
```typescript

import {ProductsService} from './../../../../core/services/products/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router,
ActivedRoute,
Params} from '@angular/router';
import {MyValidators} from './../../../utils/validators';

export class ProductEditComponent{
    form: FormGroup;
    id: string;
    constructor( 
         private formBuilder: FormBuilder,
         private productService: ProductsService,
         private router: Router,
         private activedRoute: ActivedRoute
         ){
        this.buildForm();
    }
    
    ngOnInit(){
       this.activedRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.productsService.getProduct(this.id)
            .subscribe( product => {
                // this.form.patchValue({
                //     id: product.id,
                //     description: product.description
                // });
                this.form.patchValue(product);
            });
       });
    }

    saveProduct(event: Event){
        event.preventDefault();
        if(this.form.valid){
           const product = this.form.value;
           this.productService.updateProduct(this.id,product)
           .subscribe((newProduct) => {
               this.router.navigate(['./admin/products']);
               console.log(newProduct);                
           });
        }  
        
    }

    saved

    private buildForm(){
        this.form = this.formBuilder.group({
            title: ['',[Validators.Required]],
            price: ['',[Validators.Required, MyValidators.isPriceValid]],
            image: '',
            description: ['',[Validators.Required]]
        })
    }  

    get priceField(){
        return this.form.get('price');
    }
    
    
}
```

recuerda que para obtener el id parametro de la rout usamos
```typescript

import {ActivedRoute, Params} from '@angular/router'

//tambien debemos escuchar al servicio usando esos parametros de la ruta.
ngOnInit(){
       this.activedRoute.params.subscribe((params: Params) => {
            const id = params.id;
            this.productsService.getProduct(id)
            .subscribe( product => {
                // this.form.patchValue({
                //     id: product.id,
                //     description: product.description
                // });
                this.form.patchValue(product);
            });
       });
    }

//tambien deberemos de cambiar en en el metodo que actualiza, todo el codigo esta en el typescript de arriba.

```

Solo faltaría que en "product-list" tener un botón para editar.
Recuerda que cuando debemos usar route, debemos remplazar un boton por un linke (<a>).
Y que para enviar parametros en un router link debes enviarlo como un array.

product-list.component.html
line 18
```HTML

<a mat-raised-button
   [routerLink]="['edit',product.id]">
Editar
</a>

```

Para que funcione debemos agregar esto al ruteo.

admin-routing.module.ts

```typescript

{
    path: 'products/edit:id',
    component: ProductEditComponent
}

```