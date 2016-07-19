import IComponentOptions = angular.IComponentOptions
import { IProduct } from '../product.interface'

export const ProductsAddComponent: IComponentOptions = {
  //3/ passing $router to the component
  bindings: {
    $router: '<',
  },
  controller: class {
    public newProduct: IProduct
    public onProductAdded: Function
    public $router: any

    //3/ private in the constructor binds to this derectly
    constructor(private Products: any) {
      'ngInject';
    }

    /// Using destructing assignment (but strongly typed)
    public onSubmit({ newProduct }: { newProduct: IProduct }): void {
      /// Accessing directly the service now
      this.Products.products.push(newProduct)
      this.newProduct = {
        name: '',
        price: undefined,
      }
      /// We can do the routing from component's level
      this.$router.navigate(['ProductsMain']);
    }
  },
  template: `
    <form 
      ng-submit="$ctrl.onSubmit({ newProduct: $ctrl.newProduct })"
    >
      <input 
        ng-model="$ctrl.newProduct.name" 
        placeholder="name" 
        required
      >
      <input 
        ng-model="$ctrl.newProduct.price" 
        placeholder="price" 
        type="number" 
        step="0.01"
        required
      >
      <button>Save</button>
    </form>
  `,
}
