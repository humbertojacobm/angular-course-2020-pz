Por defecto angular nos entrega dos ambientes

Vamos a crear un nuevo archivo de ambiente
```bash
ng build --prod
```

Va a ejecutar el proceso de compilación completa, buscando errores.

El "ng build" tomar como configuración el "angular.json"

deonde dice que variables podemos tomar. tiene optimizaciones, y mas.

Esto ya viene pre configurado, para tener una compilación de alto rendimiento.

FormsModule -> NgModel

Una vez que correges todos los errores de la full compilación.

Puedes crear un archivo

"environment.stag.ts"
```typescript

export const enviroment = {
    production: true,
    url_api: '...stag...'
}

```

Ahora para que este archivo funcione, debes irte al a 

"angular.js"
```typescript

  "configuration": {
      "production": {...},
      //copias todo el nodo de production y creas un stag
      "stag": {
          "fileReplacement" : [
              {
                 "replace": ".....environment.ts",
                 "with": ".....environment.stag.ts"
              }
          ]
      }
  }

  "serve": {
      "configurations": {
          "production":"platzi-store:build:production",
          "stag": "platzi-store:build:stag"
      }
  }

```

con esto podremos compilar usando las nuevas variables de ambiente
```bash
ng serve -c=stag
```

Con esto hacemos el full compilation
```bash
ng build -c=stag
```
