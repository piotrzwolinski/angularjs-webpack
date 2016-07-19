import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
/// Importing the new component
import { ProductsAddComponent } from './add/products-add.component'

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  /// Adding it to the module
  .component('productsAdd', ProductsAddComponent)
  .service('Products', ProductsService)
