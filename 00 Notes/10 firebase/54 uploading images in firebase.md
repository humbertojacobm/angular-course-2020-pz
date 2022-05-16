Revisando admin.guard.ts

Vamos a resolver que si el usuario intenta entrar a una modulo ruta de angular
pero este no tiene al autenticación generada en firebase, entonces el app debe
mandar al login.

admin.guard.ts
```typescript

  import {AuthService} from './../../core/services/auth.service'
  import {Observable} from 'rxjs';
  import {map,
          tap
          } from 'rxjs/operators';
  import {CanActivate
        , ActivatedRoutedSnapshot
        , RouterStateSnapshot
        , UrlTree
        , Router
        }  from '@angular/router'

@Injectable({})

export class AdminGuard implements CanActive{

    constructor(
        private authService:AuthService,
        private router: Router
    )
    canActive(
        next: ActivedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<bolean | UrlTree> | boolean{
          return this.authService.hasUser()
          .pipe(              
              map(user => {                  
                  user === null ? false : true
              }),
              tap(hasUser => {
                  if (!hasUser){
                      this.router.navigate(['./auth/login']);
                  }
              }),
          );
    }
}

```
A partir de aqui la idea es revisar como subir un filestorage.

form-product.component.html
```html

<img *ngIf="(image$ | async) as image" 
    [src]="image"
     alt="">
<input type="file"
       (change) = "uploadFile($event)">

```

form-product.component.ts
```typescript

import {
   AngularFireStorage
} from '@angular/fire/storage';
import {
  finalize
} from 'rxjs/operators'

export class FormProductComponent{


    image$: Observable<any>; 

    constructor(
        private storage: AngularFireStorage
    ){

    }

    uploadFile(event ){
        //apenas el input file detecta que subiste un archivo, este ya lo tiene en bytes en el dom.
         const file = event.target.files[0];
         const name = 'images';
         const fileRef = this.storage.ref(name);
         const task = this.storage.upload(name, file);
         task.snapshotChanges()
         .pipe(
             finalize(() => {
                 this.image$ = fileRef.getDownloadURL();
                 this.image$.subscribe(url => {
                     //despues de haber subido la image, agrego la url generada al formulario para guardarlo en bd
                      this.form.get('image').setValue(url);
                 });
             })
         )
         .subscribe();
    }

}



```