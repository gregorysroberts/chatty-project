'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope) {
    $scope.messages = [];

    $scope.messages = MessageService.getMessages().then(function(data) {
  		$scope.messages = data;
	});
  });
