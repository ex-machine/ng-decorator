# ng-decorator

Brings [syntactic sugar](https://docs.angularjs.org/api/ng/type/angular.Module#decorator) from Angular 1.4 to previous versions. Makes legacy application optimistic and future-proof.

	angular.module('app').config(['$provide', function ($provide) {
		$provide.decorator('service', ['$delegate', function ($delegate) {
			// ...
		}]);
	}]);

becomes

	angular.module('app').decorator('service', ['$delegate', function ($delegate) {
		// ...
	}]);

## Install

### NPM

    npm install --save ng-decorator

### Bower

    bower install --save ng-decorator

## Usage

`ng-decorator.js` is loaded after `angular.js` and before Angular modules. 