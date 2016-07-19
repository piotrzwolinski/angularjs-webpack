import './index.styl'

/// We need to modify the import a little bit - now TypeScript does it
import * as angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  .controller('AppController', ['AppService', AppController])
  .service('AppService', AppService)
