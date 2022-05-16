
Vamos a grear un header con el control "MatToolbar".

material/material.module.ts
```typescript
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {  MatButtonModule} from '@angular/material/button'
import {  MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule
    ]
})

export class MaterialModule{}
```

Recuerda que shared tambien debe importar material module

share.module.ts
```typescript

 import {MaterialModule} from './../material/material.module';

```

Par ver los iconos que podemos usar puedes ir a 

material.io/resources/icons..

vamos a usar "mat-icon" directiva "matBadge" y "matBadgeColor".

header.component.html
```HTML

<mat-toolbar color="primary">
 <mat-toolbar-row>
   <nav>
     <a routerLink="/home"         
        routerLinkActive="active"
        mat-button>
       Home
     </a>
     <a routerLink="/products" 
        routerLinkActive="active"
        mat-button>
       Products
     </a>
     <a routerLink="/contac" 
        routerLinkActive="active"
        mat-button>
       Contact
     </a>
   </nav>
   <a mat-raised-button 
      matBadge="4"
      matBadgeColor="warn">
     <mat-icon>shopping_cart</mat-icon>   
     Carrito
   </a>   
 </mat-toolbar-row>
</mat-toolbar>

```

Hasta aqui ya tenemos los elementos.

Pero ahora necesitamos mejorar de posición en la ventana.

Para eso usaremos flexbox.
Usaremos clases importantes como between-xs, middle-xs

header.component.html
```HTML

<mat-toolbar color="primary">
 <mat-toolbar-row>
   <div class="row 
              between-xs
              middle-xs
              header-row">
      <nav>
        <a routerLink="/home"         
            routerLinkActive="active"
            mat-button>
          Home
        </a>
        <a routerLink="/products" 
            routerLinkActive="active"
            mat-button>
          Products
        </a>
        <a routerLink="/contac" 
            routerLinkActive="active"
            mat-button>
          Contact
        </a>
      </nav>   
      <a mat-raised-button 
          matBadge="4"
          matBadgeColor="warn">
        <mat-icon>shopping_cart</mat-icon>   
        Carrito
      </a> 
   </div>  
 </mat-toolbar-row>
</mat-toolbar>

```

```css

.header-row{
  width: 100%
}

```