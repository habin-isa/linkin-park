angular.module('linkinPark', [])
	.controller('MainCtrl', [function() {
		//'this' is the equivalent to $scope in this version
		var self = this;
		
		self.testConsole = function() {
			console.log('kimmy elliott');
		}
	}])