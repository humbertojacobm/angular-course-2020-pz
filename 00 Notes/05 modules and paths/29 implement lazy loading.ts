/**
 * home/
 *   component/
 *       banner/
 *       home/
 */

 /*
    home-routing.module.ts
       routes: Routes = [
           {
               path: '',
               component: HomeComponent
           }
       ]
 */

 /*
  app-routing.modulets.
    * para cargar un modulo en el modulo principal usamos

    loadChildren: () => {
        import('./home/home.module').then(m => m.HomeModule)
    }
 */

 /*
 cuando dividimos la aplicación en modulos.
 lo modules deben volver a tener las dependencias que necesitan.
 para ngfor y mas.

   CommonModule -> @angular/common


 */

 /*
 en las redes 3g son mas lentas, lo mejor será optimizar el lazy loading

 debemos user el "PreloadAllModules", esto hace las precargas si y solo si el navegador
 ya esta libre para hacer las precargas.

 app-routing.module.ts

   PreloadAllModules -> @angular/router

   @NgModule({
       imports: [RouterModule.forRoot(routes, {
           preloadingStrategy: PreloadAllModules
       })]
   })

 */