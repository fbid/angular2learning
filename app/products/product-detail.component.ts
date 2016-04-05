import { Component } from 'angular2/core'

import { IProduct } from './product'

@Component({
  templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent {

  pageTitle:string = 'Product Details';

}
