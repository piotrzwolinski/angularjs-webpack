import { IComponentOptionsRouter } from './shared/interfaces/component-options-router.interface'

export const AppComponent: IComponentOptionsRouter = {
  $routeConfig: [{
    component: 'products',
    name: 'Products',
    /// embedding the path
    path: 'products/...',
    useAsDefault: true,
  }],
  controller: class {},
  template: `<ng-outlet></ng-outlet>`,
}
