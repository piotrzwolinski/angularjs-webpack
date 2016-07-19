import angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
	.module('app', [])
	/// Thanks to strict DI we will get an error without explicit definition of injected dependencies
	.controller('AppController', ['AppService', AppController])
	.service('AppService', AppService)
