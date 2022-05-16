```bash
 ng g c admin/component/form-product
```
admin-routing.module.ts
```typescript
  {
      path: 'products/create',
      component: FormProductComponent
  }

```

product-list.component.html
```HTML
  <a mat-raised-button routerLink="/create">Crear nuevo producto</a>
```

form-product.component.ts
```typeScript

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

class FormProductComponent{
    form: FormGroup;

    constructor( private formBuilder: FormBuilder){
        this.buildForm();
    }

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
## FormGroup:
Me permiter crear un formulario

## FormBuilder
Es un utilitario que me permite crear formularios dinamicamente.

form-product.component.ts
```HTML
  <form [formGroup]="form">
    <mat-form-field>
      <input formControlName="id" matInput type="text">
    </mat-form-field>
    <mat-form-field>
      <input formControlName="title" matInput type="text">
    </mat-form-field>  
    <mat-form-field>
      <input formControlName="price" matInput type="text">
    </mat-form-field>
    <mat-form-field>
      <input formControlName="description" matInput type="text">
    </mat-form-field>  
  </form>
```

## [formGroup]
  enlaza con el formulario del typescript
## formControlName
  enlaza con un control en el typescript









# Foobar

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