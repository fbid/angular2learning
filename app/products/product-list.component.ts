import { Component, OnInit } from 'angular2/core'

import { IProduct } from './product'
import { ProductFilterPipe } from './product-filter.pipe'
import { StarComponent } from '../shared/star.component'
import { ProductService } from './product.service'

@Component({
  selector: 'pm-products',
  templateUrl: 'app/products/product-list.component.html',
  styleUrls: ['app/products/product-list.component.css'],
  pipes: [ProductFilterPipe],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit {



  //# Properties #

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false; //immagini non visibili quando si carica la pagina
  listFilter: string = '';
  products: IProduct[];

  //# Constructor #

  //To inject dependencies we need a constructor function
  constructor(private _productService: ProductService) {
  }


  //# Methods #
  // Ci deve essere metodo per OnInit --> si prefixa con ng --> ngOnInit()
  ngOnInit(): void {
    console.log('Product Component Init');

    //Loading products on init
    this.products = this._productService.getProducts();
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  //2.3 Dichiaro evento, bindato nell'html per ricevere l'output di starComponent
  onRatingClick(message: string) : void {
    this.pageTitle = 'Product List ' + message;
  }
}
