//aquellos elementos que se pueden compartir, se pueden poner en un
// shared module.

// ng g m shared

// crea un modulo

// CommonModule @angular/common

// shared
//    components
//      footer
//      header
//    pipes
//      exponential
//    directives
//      highlight

//la idea es poner este modulo en otro modulo que lo necesite

// recuerda poner todos los componentes en el "declarations" y "export" sección.

// por ejemplo home.module.ts
// pero debe estar en el app.module.ts
  

// ng c m core
   // componentes que se van a compartir en toda la aplicación pero a travez de una
   // referencia única.
   // sirve para guardar servicios que tengan una sola referencia de los datos.
   
// core
//    services
//       products

// agregamos los servicios en la parte de providers

// el modulo core lo debemos poner en el app modulo.

// ng serve -> para validar que todo compila correctamente.

// recuerda que al crear modulos debes volver a mover las dependencias como router.
// recuerda que el core module intenta asegurar que tienes solo una instancia del servicio.
