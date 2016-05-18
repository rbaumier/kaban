app.controller('SprintController', function($scope, $http, $stateParams) {

  function refresh() {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
      method: "GET"
    }).then(function(response) {
      $scope.loadingProjects = false;
      $scope.project = $stateParams.projectId;
      $scope.sprints = response.data;
      $http({
        url: "http://localhost:8080/projects/" + $stateParams.projectId,
        method: "GET"
      }).then(function(response) {
        $scope.project = response.data;
        $scope.project.DoD = response.data.DoD || [];
        $scope.project.DoD.push("Add an item in DoD");
      });
    });
  }
  $scope.editorEnabled = false;

  $scope.disableEditor = function(index) {
    $scope.editorEnabled[index] = false;
  };

  $scope.deleteDoD = function(index) {
    $scope.project.DoD.splice(index, 1);
    $scope.project.DoD.splice($scope.project.DoD.length - 1, 1);
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId,
      method: "PUT",
      data: _.omit($scope.project, "id", "createdAt", "updatedAt")
    }).then(function(response) {
      $scope.project.DoD.push("Add an item in DoD");
    });
  };

  $scope.save = function(index, attr) {
    $scope.project.DoD[index] = attr;
    $scope.disableEditor(index);
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId,
      method: "PUT",
      data: _.omit($scope.project, "id", "createdAt", "updatedAt")
    }).then(function(response) {
      refresh();
    });
  };

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

  $scope.close = function(sprintId) {
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

  $scope.open = function(sprintId) {
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