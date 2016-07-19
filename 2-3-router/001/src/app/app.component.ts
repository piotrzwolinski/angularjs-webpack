/// Przydadzą nam się typy
import { IComponentOptionsRouter } from './shared/interfaces/component-options-router.interface'

export const AppComponent: IComponentOptionsRouter = {
  //3/ Configuring the router
  $routeConfig: [{
    component: 'products',
    name: 'Products',
    path: '/',
    useAsDefault: true,
  }],
  controller: class {},
  /// The router directive land in App component now
  template: `<ng-outlet></ng-outlet>`,
}
