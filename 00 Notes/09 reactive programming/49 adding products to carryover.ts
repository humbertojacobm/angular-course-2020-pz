/*
como se hace para comunicar eventos entre diferentes componentes

-> programación reactiva.

 ng g s core/services/cart

*/

/*
la librería que añade principios reacticos es -> rxjs

 behaviourSubject -> rxjs

 private cart = new BehaviorSubject<Product[]>([]);

 cart$ = this.cart.asObservable();

 add(product: Product)
    * en vez de hacer push, uso  ... para crear una nueva instancia del objeto 
    * y no tener problemas de inmutabilidad
    this.products = [...this.products, product];

    *para notificar a todos los subscriptores que hay un nuevo elemento en el carrito, uso

    this.cart.next(this.products);

*/

/*
  product.component.ts

     imports cart.service.ts

     addCart()
        this.cartService.addCart(this.product);
*/

/*
   header.component.ts
     imports cart.service.ts

     ngOnInit(){
         this.cartService.cart$.subscribe(products => {
             this.total = products.length;
         })
     }
*/