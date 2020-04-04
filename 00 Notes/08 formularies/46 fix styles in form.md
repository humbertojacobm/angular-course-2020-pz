Vamos a usar una estructura "mat-card", tambien estamos usando clases de flexbox
como "row" y "col-xs".

Dentro del "mat-card" el formulario tiene una estructura para material que se debe
componer con "mat-card-header" y "mat-card-content" (donde iran los inputs).
Tambien tendrá una sección para las botones que será "mat-card-actions".

Recuerda que un button dentro de un formulario debe ser del tipo
"submit". Asi como en el formulario debes tener un "ngSubmit"
para que funcione como lo estas esperando.

Y una buena practica es mandar el "$event" en el "ngSubmit", esto evita renderizaciones
incorrectas. Y en el typescript lo recibimos y quitamos la acción por defecto.

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
            type="submit">
              Guardar
           </button>
        </mat-card-actions>
    </mat-card>
</form>
```

form-product.component.ts
```typescript

import {ProductsService} from './../../../../core/services/products/products.service';
import {Router} from '@angular/router';

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
            price: ['',[Validators.Required]],
            image: '',
            description: ['',[Validators.Required]]
        })
    }  
    
    
}
```


# example for MD file

Foobar is a Python library for dealing with word pluralization.c

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)