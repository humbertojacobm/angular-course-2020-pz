Material usa "css-grid" para posicionar sus elementos.

Pero lo mas normal es que un diseñador use "flexbox" para hacer esto tambien.

usamos [flexboxgrid](https://flexboxgrid.com)

```bash

 npm i flexboxgrid --save

```

Entonces para poder contar con este sistema de distribución debemos modificar
Angular.json para agregar este nuevo css.

Angular.json :32
```JSON

 "styles" :  [
     "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
     "./node_modules/flexboxgrid/dist/flexboxgrid.min.css",
     "",
     ""
 ]

```

Debes volver a recompilar "ng serve".

Recuerda que las clases que tienes para poder usar flexbox es :

```HTML

<div class="row">
  <div class="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4
              ">
        <div class="box">
           Responsive
        </div>
  </div>
</div>
 
```

