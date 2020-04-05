Vamos a usar Angular material
Tiene una implementaciòn nativa con componentes de angular

la documentaciòn esta en [material.angular.io/guids](https://material.angular.io/guids)


```bash

 ng add @angular/material

```

te va a dar varios temas

- Indigo y mas..

Ahora tambien para poder hacer reconocimiento del touch, debemos instalar hammerjs,
que se instala con material.
Tambien material tiene algunas transiciones y animaciones.

Despues de haberlo instalado material ha agregado al "app-module.component.ts" el "BrowserAnimationModule".

Tambien ha agregado un estilo y tipo grafías por defecto.

Entre otros archivos nos crea el "style.scss".

```css

.product-grid {
    display: grid;
    grid-template-columns: repeat(1,1fr);
}

@media (min-width: 576) {
    .product-grid {
        grid-template-columns: repeat(3,1fr);
    }
}

html,body {height: 100%}

body {
    margin: 0;
    font-family: Roboto "Helvetica Neue" sans-serif;
    
}
```

y vamos a ver que en "angular.json", se ha agregado una llave

```JSON

 "styles" :  [
     "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
     "",
     ""
 ]

```

De la misma forma que creamos el "shared" module, vamos a crear un "material" module para que pueda usar en toda
la aplicación

```bash

 ng g m material

```

material/material.module.ts

```typescript
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {  MatButtonModule} from '@angular/material/button'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [
        MatButtonModule
    ]
})

export class MaterialModule{}

```

Importamos el MaterialModule en el ProductModule.

product.module.ts

```typescript
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {  MaterialModule} from '@./../material/material.module'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})

export class MaterialModule{}

```

y luego ya podemos usar las directivas en los botones como "mat-button" <<color="primary">>.

Es probable que algunas veces cuando modificas modulos, rutas, y variables de ambiente, debas volver a 
recompilar con ng-serve

Hay otros estilos de botones com "mat-raised-button".