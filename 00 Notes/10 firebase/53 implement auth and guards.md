

ya teniamos

register.component.ts
```typescript

  import {AuthService} from './../../core/services/auth.service'

  @Component({})

  export class RegisterComponent{
      
      //he removido algunas propiedades form para solo ver las nuevas lineas
      constructor(
          private authService:AuthService
      ){}

      //modifcamos el login

      register(event: Event){
          event.preventDefault();
          if (this.form.valid){
              const value = this.form.value;
              this.authService.createUser(value.email, value.password)
              .then(() => {
                  this.router.navigate(['/login']);
              });
          }
      }

  }

```

creamos el login method en el authService.

auth.service.ts
```typescript

  import {Injectable} from 'angular/core'
  import {AngularFireAuth } from '@angular/fire/auth';

  @Injectable({
      providedIn: 'root'
  })

  export class AuthService{
      constructor(
          private af: AngularFireAuth
      ){}

      createUser(email: string, password: string){
          return this.af.auth.createUserWithEmailAndPassword(email, password);
      }
      login(email:string, password: string){
          return this.af.auth.signInWithEmailAndPassword(email, password);
      }
      logout(){
          //con este metodo de aqui podemos desloguearnos desde donde sea que lo necesitemos.
          return this.af.auth.signOut();
      }
      hasUser(){
        //   this.af.authSate
        //   .subscribe( user => {
        //       console.log(user == null);
        //   })
          return this.af.authSate;
      }
  }

```
en el

login.component.ts
```typescript

  import {AuthService} from './../../core/services/auth.service'

  @Component({})

  export class LoginComponent{
      
      //he removido algunas propiedades form para solo ver las nuevas lineas
      constructor(
          private authService:AuthService
      ){}

      //modifcamos el login

      login(event: Event){
          event.preventDefault();
          if (this.form.valid){
              const value = this.form.value;
              this.authService.login(value.email, value.password)
              .then(()=> {
                  this.router.navigate(['/admin']);
              })
              .catch(() => {
                  alert('no es valido');
              })

          }
      }

  }

```
Aqui estamos haciendo el deslogueo

nav.component.ts
```typescript

  import {AuthService} from './../../core/services/auth.service'

  @Component({})

  export class NavComponent{
      
      //he removido algunas propiedades form para solo ver las nuevas lineas
      constructor(
          private authService:AuthService
      ){}

      //modifcamos el login

      logout(){
          this.authService.logOut()
          .then(() => {
                this.router.navigate(['./home']);
          });
      }

  }

```

ahora vamos a poner el guard en el modulo de administración que necesitamos

app-routing.module.ts
```typescript

{
    path: 'admin',
    canActive: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule);
}

```

Recuerda que usaremos "tap" para debug de rxjs.

admin.guard.ts
```typescript

  import {AuthService} from './../../core/services/auth.service'
  import {Observable} from 'rxjs';
  import {map,
          tap
          } from 'rxjs/operators';

@Injectable({})

export class AdminGuard implements CanActive{

    constructor(
        private authService:AuthService
    )
    canActive(
        next: ActivedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<bolean | UrlTree> | boolean{
          return this.authService.hasUser()
          .pipe(
              tap(user => console.log(user)),
              map(user => {                  
                  user === null ? false : true
              })
          );
    }
}

```

Recuerda que tambien puedes hacer lo mismo con los roles :)

