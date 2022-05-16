/**
 * cuando tienes rutas, recuerda que el bundling sigue siendo un archivo.
 * entonces entra el concepto de modulo, que se amarra con la rutas de angular
 * para crear mas de un archivo angular y solo descargar ese archivo cuando lo necesites
 * incluso hay la opción de precargarlo para optimizar, pero siempre es mejor que el 
 * no tener modulos.
 * 
 * pasos de cargar un archivo js
 * descargar, parsear, compilar y ejecutar.
 * descargar demora mas algunos demora como 10 segunds.
 * 
 * 
 * el archivo bundle principal es el main.js
 */

 /**
  * para usar lazy lading debes modularizar tu aplicación
  * cada modulo debe tener un routing obligatoriamente.
  */

  /*
  home/

    home-routing.module.ts
       @angular/routre -> ngModule
       @angular/router
 
       ngModule -> imports: RouterModule.forChild(routes)
                   exports: routerModule

    home.module.ts
      @angular/routre -> ngModule
        - banner
        - home   
        - homeRoutingModule         
      imports: homeRoutingModule       



  */