//crear guardianes
// ng g g admin

/*
 - canActivate
 - CanActiveChild
 - CanLoad

*/

/*
el metodo canActivate
puede validar si eres administrador o no.
Aqui es donde validaría contra el servicio de autenticación.

*/

/*

en app-routing.module.ts

  path: 'contact',
  canActivate: [AdminGuard],
  component: ContactComponent

 */
