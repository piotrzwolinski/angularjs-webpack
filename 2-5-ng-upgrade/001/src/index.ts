import './index.styl'

//2/ Importing the dependencies of Angular 2
import 'reflect-metadata'
require('zone.js/dist/zone') // tslint:disable-line

import * as angular from 'angular'
//2/ Adding the adapter for upgrade
import { UpgradeAdapter } from '@angular/upgrade'
const adapter: any = new UpgradeAdapter()

import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])

/// Bootstrapping using the adapter
adapter.bootstrap(document.body, ['app']);
