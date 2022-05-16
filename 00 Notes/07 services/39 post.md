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
        return this.http.get<Product[]>(`${environment.url_api}/products`);
    }
    getProduct(id: string){
        return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    }

    createProduct(product: Product){
        return this.http.post<Product>(`${environment.url_api}/products`,product);
    }
    
}

```

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

  createProduct(){
      this.productsService.createProduct(this.product)
      .subscribe( product => {
          this.product = product;
      })
  }
}

```