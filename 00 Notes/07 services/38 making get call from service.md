
productDetail.component.ts
```typescript

import {ProductsService} from './../../core/services/products/products.service';

export class ProductDetailComponent{

  product: Product;

  constructor(
       private productsService:ProductsService,
       private route: ActivedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.fetchProduct(id);
    })
  }

  fetchProduct(id: string)
  {
    this.productsService.getProduct(id)
        .subscribe( product => {
            this.product = product;
        });
  }
}

```
Estp va a dar un error de consola por el "product.image" entonces la idea es agregar un div que nos permita
no pintar en el dom.

productDetail.component.html
```HTML

<div *ngIf="product">
   <div>
      <img [src]="product.image" alt="">
   </div>
</div>

```

Recuerda que aqui ya usamos las variables de ambiente de angular

environment.ts
```typescript

export const environment = {
    production: false,
    url_api: 'https://platzi-store.herokuapp.com'
}

```

y vamos a ponerlo al servicio
products.service.ts
```typescript

import {HttpClient} from '@angular/common/http'
import {Product} from '../../Models/Product.model';
import {environment} from './../../../environemts/environment';

export class ProductsService {
    constructor(
        private http: HttpClient
    ){}

    getAllProducts() {
        return this.http.get<Product[]>(environment.url_api);
    }
    getProduct(id: string){
        return this.http.get<Product>(`${environment.url_api}${id}`);
    }
    
}

```
