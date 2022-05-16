Vemos que material tiene cards para poder mostrar items.

Implementar : import { MatCardModule} from '@angular/material/card'

material/material.module.ts
```typescript
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {  MatButtonModule} from '@angular/material/button'
import {  MatToolbarModule} from '@angular/material/toolbar'
import {  MatIconModule} from '@angular/material/icon'
import { MatBadgeModule} from '@angular/material/badge'
import { MatCardModule} from '@angular/material/card'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule
    ]
})

export class MaterialModule{}
```

Y vamos a refactorizar product.compoment.html
Agregando al estructura <mat-card>

```HTML
<mat-card>
   <mat-card-header>
      <mat-card-title>
         {{product.title | uppercase}}
      </mat-card-title>
      <mat-card-subtitle>
        {{product.price | currency}}
      </mat-card-subtitle>
   </mat-card-header>
   <div class= "crop-image">
     <img [src]="product.image" alt="">
   </div>   
   <mat-card-content>
      <p>
        {{ product.description | slice: 0:10}}
      </p>
   </mat-card-content>
   <mat-card-actions>
      <a mat-raised-button
         [routerLink]="['./products',product.id]"
      >
        Ver detalle
      </a>
      <button
         (click) = "addCart()"
         mat-raised-button
         color = "primary"
         >
        Agregar carrito
      </button>
   </mat-card-actions>
</mat-card>
```

Tenemos que mejorar el posicionamiento usando "grid-gap"

style.scss
```css

.product-grid{
  display: grid;
  grid-template-columns: repeat(1,fr);
  grid-gap: 50px 20px;
}

```

Tambien como parte de la correpción al agregar el div .crop-image, debemos modificar los estilos del component

product.component.scss
```scss

.crop-image{
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 100%;
  }
}

```

Tenemos que seguir refactorizando los estilos para eso ahora toca:

layout.component.html
```HTML

<app-header>
</app-header>
<div class="container">
   <router-outlet>
   </router-outlet>
</div>
<app-footer>
</app-footer>

```

```css

.product-grid {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 50px 20px;
}

.container {
  width:100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: 0px;
  margin-left: 0px;
}

@media (min-width: 576) {
    .product-grid {
        grid-template-columns: repeat(3,1fr);
    }
    .container {
    max-width:1110px;
    padding-right: 16px;
    padding-left: 16px;
  }
}

html,body {height: 100%}

body {
    margin: 0;
    font-family: Roboto "Helvetica Neue" sans-serif;
    
}
```
