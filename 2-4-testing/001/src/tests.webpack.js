//2/ importing angular and mocks
import 'angular'
import 'angular-mocks/angular-mocks'

//2/ imprting app the *.spec* files
var testsContext = require.context('.', true, /.spec$/)
testsContext.keys().forEach(testsContext)
