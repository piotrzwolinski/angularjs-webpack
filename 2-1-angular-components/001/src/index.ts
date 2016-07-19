import './index.styl'

import * as angular from 'angular'
/// Importing a new component
import { AppComponent } from './app/app.component'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// Using it under the 'app'-name
  .component('app', AppComponent)
  .service('AppService', AppService)
