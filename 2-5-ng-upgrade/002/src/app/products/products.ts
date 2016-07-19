import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { ProductsAddComponent } from './add/products-add.component'
import { ProductsMainComponent } from './main/products-main.component'
import { adapter } from '../../index'

/// the ng2 service must be added as a provider
adapter.addProvider(ProductsService);

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .component('productsAdd', ProductsAddComponent)
  .component('productsMain', ProductsMainComponent)
  /// Downgrade of the service - calling the method
  .service('Products', adapter.downgradeNg2Provider(ProductsService))
