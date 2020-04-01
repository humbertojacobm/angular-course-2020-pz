/*
  ng c s products

  @Injectable

  getAllProducts(){
      return this.products;
  }

  getProduct(id: int){
      return this.products.find(item => id === item.id);
  }

*/

/*
 ng g c product-detail

 app-routing.module.ts

 {
     path: 'produt/:id',
     component: ProductDetailComponent
 }

*/

/*
 ActivatedRoute, Params from @angular/router

  private route: AcitvatedRoute

  this.route.params.subscribe((params: Params) => {
      console.log(params);
  }) 

*/

/*
private productsService: ProductsService

this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const product = this.productsService.getProduct(id);
      
  }) 

*/