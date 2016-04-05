import { Injectable } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

import { IProduct } from './product.ts'

//@Injectable is needed when the service has other dependencies
//Here is not strictly needed but it's a best practice and adds clarity.

@Injectable()
export class ProductService {

  private _productUrl = 'api/products/products.json';

  constructor(private _http: Http){}

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduct[]>response.json())
      .catch(this.handleError)

  }

  //Error handler for Http get req
  private handleError(error: Response) {
    console.log('HTTP get error', error);
    return Observable.throw(error.json().error || 'Server error');
  }



}
