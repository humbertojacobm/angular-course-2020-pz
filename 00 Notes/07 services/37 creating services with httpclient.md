servicios hay

soa
graphql
web api
  http o https.

vamos a usar [heroku service](https://platzi-store.herokuapp.com/products/)

Recuerda que para poder hacer servicios en angular debe user el httpmodule

app.module
```typescript

import { HttpClientModule }  from '@angular/common/http';

```
y lo ponemos en los imports


Ahora para poder usarlo en un servicio importamos el httpClient

products.service.ts
```typescript

import {HttpClient} from '@angular/common/http'
import {Product} from '../../Models/Product.model';

export class ProductsService {
    constructor(
        private http: HttpClient
    ){}

    getAllProducts() {
        return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
    }
    getProduct(id: string){
        return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
    }
    
}

```

Una vez creado debemos ponerlo disponible en los componentes

products.component.ts
```typescript

import {ProductsService} from './../../core/services/products/products.service';

export class ProductsComponent{

  products: Product[] = [];

  constructor(
       private productsService:ProductsService
  ){}

  ngOnInit(){
      this.fetchProducts();
  }

  fetchProducts(){
      this.productsService.getAllProducts()
      .subscribe( products=> {
           this.products = products;
      });
  }


}

```