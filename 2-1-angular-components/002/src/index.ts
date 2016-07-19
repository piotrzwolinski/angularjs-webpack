import './index.styl'

import * as angular from 'angular'
//6/ Importing all components to the main application
import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])
