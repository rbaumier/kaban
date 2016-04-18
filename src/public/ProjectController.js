app.controller('ProjectController', function($scope, $http) {

  $scope.loadingProjects = true;

  $scope.showForm = function() {
    console.log('test');
    $scope.toggle = true;
  }

  function refresh() {
    $http({
      url: "http://localhost:8080/projects",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $scope.loadingProjects = false;
      $scope.projects = response.data;
    })
  }

  $scope.create = function(project) {
    $http({
      url: "http://localhost:8080/projects",
      method: "POST",
      data: {
        "name": project.name
      }
    }).then(function(response) {
      refresh();
    });
  }

  refresh();
})
