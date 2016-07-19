import './index.styl'

import * as angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// ng-annotate will take care of the injection
  .controller('AppController', AppController)
  .service('AppService', AppService)
