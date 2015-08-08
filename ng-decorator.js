(function (angular) {
	var moduleOrig = angular.module;
	angular.module = function () {
		var moduleInstance = moduleOrig.apply(this, arguments);
		moduleInstance.decorator = moduleInstance.decorator || function () {
			var args = arguments;
			moduleInstance.config(['$provide', function ($provide) {
				$provide.decorator.apply(null, args);
			}]);
		};
		return moduleInstance;
	};
})(angular);
