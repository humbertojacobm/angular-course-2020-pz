es un servicio de google con multiples servicios.

hay curso solo de firebase

console.firebase.google.com

debes crear tu proyecto con una cuenta de gmail

firebase te da algunas opciones:

- authentication
- database
- storage
- hosting
- Functions

Autenticación te da:
  - correo.
  - telefono
  - gmail
  - play juegos
  - microsoft
  - etc.

Tambien sería bueno habilitar el storage.

Configuración de proyecto -> agregar configuración para la web

proyecto: platzi-store

Podemos habilitar el firebase hosting

Par añadir firebase a una aplicación hay un sdk
 firebase-app.js


Setting /general / Configuration /
  y vas a poder copiar las llaves de acceso.

Por el lado de tu applicación vamos a hacer lo siguiente:

    En github vas a encontrar angularfire2, eso lo vamos a instalar.

    ```bash
    npm install firebase @angular/fire --save
    ```

"environment.dev.ts"
```typescript

export const enviroment = {
    production: true,
    url_api: '...stag...',
    firebase: {
        .....
        //aqui pones las llaves que generaste
    }
}

```

app.module.ts
```typescript

import { AngularFireModule } from '@angular/fire'

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase);
    ]
})

```

Ya teniendo firebase en el proyecto, ya podemos ver lo que nos ofrece .

- cloud firebase storage.
- Realtime database
- Authentification users.
- Upload files.
- send push notifications.
- call functions.

Vamos a empezar con authentication users.

app.module.ts
```typescript

import { AngularFireModule } from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFireStorageModule} from '@angular/fire/Storage'
import {environment} from '../.../environments/environment'

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,//autenticación
        AngularFireStorageModule //database
    ]
})

```

Ahora vamos a empezar con la authentication

```bash

  ng g s core/services/auth

```

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
  }

```

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