/// Importing the created interface
import { IProduct } from './product.interface'

export class AppService {
  //5/ We use it for holding the correct object structure
  public products: IProduct[] = [
    { name: 'Milk', price: 1.05 },
    { name: 'Salami', price: 2.5 },
    { name: 'Bread', price: 0.85 },
  ]
}
