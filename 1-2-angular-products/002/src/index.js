import angular from 'angular'
import { AppController } from './app/app'

//3/ We create the first controller
angular
	.module('app', [])
	.controller('AppController', AppController)