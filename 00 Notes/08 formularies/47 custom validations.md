Vamos a crear validaciones personalizadas.
Podemos crear una carpeta utils.
Dentro de utils podemos tener "validators.ts".

Podemos crear "funciones constantes" o una "clase estática".

validators.ts
```typescript

import {AbstractControl} from '@angular/forms'

export class MyValidators{
    static isPriceValid(control: AbstractControl){
      const value = control.value;
      console.log(value);
      if ( value>10000){
          return {price_invalid: true};
      }
      return null;//si todo salió bien
    }
}
```
Aqui vamos a agregar el "MyValidators".

form-product.component.ts
```typescript

import {ProductsService} from './../../../../core/services/products/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {MyValidators} from './../../../utils/validators';

export class FormProductComponent{
    form: FormGroup;

    constructor( 
         private formBuilder: FormBuilder,
         private productService: ProductsService,
         private router: Router
         ){
        this.buildForm();
    }
    
    ngOnInit(){

    }

    saveProduct(event: Event){
        event.preventDefault();
        if(this.form.valid){
           const product = this.form.value;
           this.productService.createProduct(product)
           .subscribe((newProduct) => {
               this.router.navigate(['./admin/products']);
               console.log(newProduct);                
           });
        }  
        
    }

    saved

    private buildForm(){
        this.form = this.formBuilder.group({
            id: ['',[Validators.Required]],
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

vamos a tener que mostar el error en el template y usaremos

form.get('price').hasError('price_invalid')
form.get('price').hasError('required')

y bloqueamos el botón subtmit con 
[disabled]="form.invalid"

y para que no aparezca con el error en la primera carga usamos
div *ngIf="form.get('price').errors && form.get('price').dirty"

poner enfasis en "dirty" que significa que ya toque el formulario.



"form-product.component.html"
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
                    <input formControlName="id" 
                    matInput type="text"
                    placeholder="id">
                </mat-form-field>              
            </div>
          </div>
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
                <div *ngIf="form.get('price').errors && form.get('price').dirty">
                    <p *ngIf="form.get('price').hasError('price_invalid')">
                       No te debes pasar de 10000
                    </p>
                    <p *ngIf="form.get('price').hasError('required')">
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

Algo a notar es tratar de intentar no repetir codigo.
Creamos una propieda en el typscript para que el template no tenga
que estarlo recreando.

```typescript
     get priceField(){
        return this.form.get('price');
    }
```

Modificando en el template para usar esto "priceField".

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
                    <input formControlName="id" 
                    matInput type="text"
                    placeholder="id">
                </mat-form-field>              
            </div>
          </div>
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
