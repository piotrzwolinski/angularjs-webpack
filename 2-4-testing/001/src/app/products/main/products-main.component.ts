import IComponentOptions = angular.IComponentOptions

export const ProductsMainComponent: IComponentOptions = {
  controller: class {},
  //3/ The component holds only the link
  template: `
    <a ng-link="['ProductsAdd']" href="javascript:void(0)">Add Product</a>
  `,
}
