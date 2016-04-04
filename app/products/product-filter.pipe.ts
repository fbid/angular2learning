import { PipeTransform, Pipe } from 'angular2/core';

import { IProduct } from './product';


@Pipe({
  name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  //value[] is the products array in our case
  //args[] is the string we use to filter

  transform(value: IProduct[], args: string[]): IProduct[] {

    //1. If there is a filter typed I want to convert it to LowerCase otherwise null
    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;

    //2. If filter is null returns null, otherwise return every product that corresponds to the filter
    return filter ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value
  }
}
