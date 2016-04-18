app.controller('ProjectController', function($scope, $http) {

  $scope.loadingProjects = true;

  $scope.getProjects = function() {
    $http({
      url: "http://localhost:8080/projects",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $scope.loadingProjects = false;
      $scope.projects = response.data;
    })
  }

  $scope.createProject = function(name) {
    $http({
      url: "http://localhost:8080/projects",
      method: "POST",
      data: {
        "name": name
      }
    }).then(function(response) {
      $scope.getProjects();
    })
  }

  $scope.getProjects();
})
