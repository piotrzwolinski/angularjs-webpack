/// importing the module
import './products'

describe('Module: Products', () => {

  describe('Controller: ProductsComponent', () => {

    /// injecting it to ...
    beforeEach(angular.mock.module('app.components.products'))

    /// injecting the component's controller
    beforeEach(angular.mock.inject(($componentController: any) => {
      //5/ mocking the dependencies of the controller
      this.$ctrl = $componentController('products', {
        Products: {
          products: [{ name: 'asd', price: 0 }],
        },
      })
    }))

    //3/ test 
    it('should have products injected from service', () => {
      expect(this.$ctrl.products.length).toBe(1)
    })

  })

})
