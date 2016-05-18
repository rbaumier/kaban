'use strict';

app.controller('StoriesController', function($scope, $http, $stateParams) {
  var url = "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories"

  function refresh() {
    $http({
      url: url,
      method: "GET"
    }).then(function(response) {
      $scope.stories = response.data;
      $scope.loadingProjects = false;
      $scope.project = $stateParams.projectId;
      $scope.sprints = $stateParams.sprintId;
      $scope.stories = response.data;
    });
  }

  $scope.create = function(story) {
    $http({
      url: url,
      method: "POST",
      data: {
        "name": story.name,
        "valeur_metier": story.valeur_metier,
        "effort_technique": story.effort_technique,
        "zone": 'backlog'
      }
    }).then(function(response) {
      refresh();
    });
  }

  refresh();
});
