/**
 vistas anidadas: similar a masterpage pero con angular router.

 ng g c layout

 layout.component.html

 <app-header></app-header>
 <outer-outlet></router-outlet>
 <app-footer></app-footer>

 contact.component.html

 <p>contac</p>


 */

 /**
  app-routing.module.ts
  const routes: Routes = [ ...
  {
      path: '',
      component: LayoutComponent,      
      children: [
         {
             redirectTo: '/home',
             pathMatch: 'full,
         },
         {
              path: 'home',
              componet: HomeComponent,
          }
      ]

  }

  */