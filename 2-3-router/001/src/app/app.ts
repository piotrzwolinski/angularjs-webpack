import IModule = angular.IModule
import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

/// Importing the router
import '@angular/router/angular1/angular_1_router'

export const ComponentsModule: IModule = angular
  .module('app.components', [
    /// Adding it to dependencies
    'ngComponentRouter',
    ProductsModule.name,
  ])
  .component('app', AppComponent)
  /// Setting what it the main router component
  .value('$routerRootComponent', 'app')
