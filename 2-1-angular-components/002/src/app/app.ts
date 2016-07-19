import IModule = angular.IModule
import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

//5/ We create a new module for all application's components
export const ComponentsModule: IModule = angular
  .module('app.components', [
    ProductsModule.name,
  ])
  .component('app', AppComponent)
