import { Component } from 'angular2/core'
import { RouteParams } from 'angular2/router'

import { IProduct } from './product'


@Component({
  templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent {

  pageTitle:string = 'Product Details';

  constructor( private _routeParams : RouteParams){
    let id = +this._routeParams.get('id'); //+ converts string -> number
    this.pageTitle += `: ${id}`;
  }

}
