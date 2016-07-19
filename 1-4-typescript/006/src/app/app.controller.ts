import { IProduct } from './product.interface'

export class AppController {
  public products: IProduct[]

  //4/ The annatation says that the dependencied must be checked here
  constructor(AppService: any) {
    'ngInject';
    
    this.products = AppService.products
  }
}
