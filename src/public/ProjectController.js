app.controller('ProjectController', function($scope, $http) {

  $scope.loadingProjects = true;

  $scope.showForm = function(flag) {
    $scope.toggle = flag;
  }

  function refresh() {
    $http({
      url: "http://localhost:8080/projects",
      method: "GET"
    }).then(function(response) {
      $scope.loadingProjects = false;
      $scope.projects = response.data;
    })
  }

  $scope.create = function(project) {
    $http({
      url: "http://localhost:8080/projects",
      method: "POST",
      data: {
        "name": project.name,
        "DoD": []
      }
    }).then(function(response) {
      refresh();
    });
  }

  refresh();
})
