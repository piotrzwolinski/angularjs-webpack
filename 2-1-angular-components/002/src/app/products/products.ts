import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'

//4/ Passing the proper parts to the products module
export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .service('Products', ProductsService)
