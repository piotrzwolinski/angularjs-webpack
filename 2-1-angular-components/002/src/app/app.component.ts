import IComponentOptions = angular.IComponentOptions

//4/ The application component contains the Products component
export const AppComponent: IComponentOptions = {
  controller: class {},
  template: `<products></products>`,
}
