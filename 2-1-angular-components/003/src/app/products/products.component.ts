/// Importing webpack without TypeScript
const { listElement } = require('./products.styl') // tslint:disable-line
import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;

export const ProductsComponent: IComponentOptions = {
  controller: class {
    public products: IProduct[]

    constructor(Products: any) {
      'ngInject';

      this.products = Products.products
    }
  },
  //7/ The template uses a custome class name now
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products" class="${listElement}">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
