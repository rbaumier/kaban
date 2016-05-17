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

  $scope.close = function(sprintId){
    console.log('sprintId : ', sprintId);
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + sprintId + "/close",
      method: "POST",
      data: {
        "status": "closed"
      }
    }).then(function(response) {
      refresh();
    })
  }

  $scope.open = function(sprintId){
    console.log('sprintId : ', sprintId);
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + sprintId + "/close",
      method: "POST",
      data: {
        "status": "open"
      }
    }).then(function(response) {
      refresh();
    })
  }

  refresh();
})
