(function(module) {

  var UserController = function($scope, github, $routeParams, $log) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };
    var onError = function(response) {
      $scope.message = "Could not fetch the data!"
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    $log.log("UserController username: " + $scope.username);
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  module.controller("UserController", UserController);

}(angular.module("githubViewer")));