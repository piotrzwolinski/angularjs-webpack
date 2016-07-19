import IComponentOptions = angular.IComponentOptions

//10/ We create the interface for the router
interface IRouteConfig {
  path: string
  name: string
  component: string
  useAsDefault: boolean
}

export interface IComponentOptionsRouter extends IComponentOptions {
  $routeConfig: IRouteConfig[]
}
