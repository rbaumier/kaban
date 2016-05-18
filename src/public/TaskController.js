'use strict';

app.controller('TaskController', function($scope, $http, $stateParams) {
  var url = "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories/" + $stateParams.storyId + "/tasks";
  $scope.project = $stateParams.projectId;
  $scope.sprint = $stateParams.sprintId;
  function refresh() {
    $http({
      url: url,
      method: "GET"
    }).then(function(response) {
      $scope.tasks = response.data;
    });
  }

  $scope.create = function(task) {
    $http({
      url: url,
      method: "POST",
      data: {
        "name": task.name,
        "zone": "TODO"
      }
    }).then(function(response) {
      refresh();
    });
  }

  $scope.update = function(task) {
    $http({
      url: url + '/' + task.id,
      method: "PUT",
      data: _.omit(task, "id", "createdAt", "updatedAt", "storyId")
    }).then(function(response) {
      refresh();
    });
  }

  refresh();
});
