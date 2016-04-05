import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { IProduct } from './product'


@Component({
  templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent {

  pageTitle:string = 'Product Details';

  constructor( private _routeParams : RouteParams,
               private _router: Router){
    let id = +this._routeParams.get('id'); //+ converts string -> number
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['Products']);
  }

}
