var myIdle = angular.module('myIdleGame', ["ngStorage", 'ui.layout']);

myIdle.controller('coreCtrl', ['$interval', '$scope', '$localStorage', function ($interval, $scope, $localStorage) {
	var self = this;
	if($localStorage.idles === undefined) {
		$localStorage.idles = 0;
		console.log("idles not defined");
	}
	self.idles = $localStorage.idles;
	self.addIdles = function(toAdd){
		self.idles += toAdd;
	}

	self.loop = $interval(function(){
		self.idles += 1;
		$localStorage.idles = self.idles;

	}, 1000, 0);

	$scope.$on("$destroy", function(){
		if(angular.isDefined(self.loop)){
			$interval.cancel(self.loop);
			self.loop = undefined;
		}

	})
}]);
