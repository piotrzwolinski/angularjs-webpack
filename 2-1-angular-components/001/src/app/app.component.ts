import { IProduct } from './product.interface'
/// Adding interfaces to Angular 1.5 thanks to typings
import IComponentOptions = angular.IComponentOptions;

/// Setting the type will help to avoid errors in the structure of the object
export const AppComponent: IComponentOptions = {
  //10/ Contoller and view are in one place now
  controller: class {
    public products: IProduct[]

    constructor(AppService: any) {
      'ngInject';

      this.products = AppService.products
    }
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <!-- Using $ctrl instead of vm now-->
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
