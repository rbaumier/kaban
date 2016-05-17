app.controller('SprintController', function($scope, $http, $stateParams) {

  function refresh() {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
      method: "GET"
    }).then(function(response) {
      $scope.loadingProjects = false;
      $scope.project = $stateParams.projectId;
      $scope.sprints = response.data;
    });
  }

  $scope.create = function(sprint) {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
      method: "POST",
      data: {
        "name": sprint.name
      }
    }).then(function(response) {
      refresh();
    });
  }

  function close(sprintId){
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + sprintId + "/close",
      method: "GET"
    }).then(function(response) {
      window.location = "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints";
    })
  }

  refresh();
})
