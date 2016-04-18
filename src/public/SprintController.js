app.controller('SprintController', function($scope, $http, $stateParams) {

  $scope.getSprints = function() {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $scope.loadingProjects = false;
    })
  }

  $scope.createSprint = function(name) {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
      method: "POST",
      data: {
        "name": name
      }
    }).then(function(response) {
      $scope.getSprints();
    })
  }


  $scope.getSprints();
})