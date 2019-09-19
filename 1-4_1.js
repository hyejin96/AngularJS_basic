// myApp은 응용 프로그램이 실행되는 html 요소의미
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.changeName = function() {
		$scope.firstName = "Nelly";
	};
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
	$scope.names = [
		{name:'Jani', country:'norway'},
		{name:'katy', country:'usa'}
	];
});	