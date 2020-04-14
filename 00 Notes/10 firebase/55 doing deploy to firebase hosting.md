Puedes deployar tu web a un hosting real sin ningun problema :)

```bash

  firebase init

```

Debes elegir la opción de hosting

Luego eliges la aplicación

Recuerda que despues de compilar tu aplicación con ng build

Todo el codigo esta en dist/platzi-project

Cuando el cmd te pide la ubicación del proyecto se la das con "dist/platzi-project"

Compilamos a full

```bash

  ng build --prod
  
```

con esto refrescamos nuesta carpeta dist/

Y ahora

```bash

  firebase deploy
  
```

Esto sube la web a firebase y nos devuelve una URL publica

Recuerda que por defecto firebase usa web estatica no usa single page applicación
debemos modifar el firebase.json

firebase.json
```json

//agregamos
"rewrites": [
    {
        "source": "**",
        "destination": "/index.html"
    }
]

```

Hay que volver ha hacer el deploy

```bash

  firebase deploy
  
```
