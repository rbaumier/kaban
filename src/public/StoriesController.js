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
    }).catch(err => console.log(err));
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

  $scope.toBacklog = function(story){
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories/" + story.id,
      method: "PUT",
      data: {
        "name": story.name,
        "valeur_metier": story.valeur_metier,
        "effort_technique": story.effort_technique,
        "zone": 'backlog'
      }
    }).then(function(response) {
      refresh();
    })
  }

  $scope.toPlanning = function(story){
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories/" + story.id,
      method: "PUT",
      data: {
        "name": story.name,
        "valeur_metier": story.valeur_metier,
        "effort_technique": story.effort_technique,
        "zone": 'sprint_planning'
      }
    }).then(function(response) {
      refresh();
    })
  }

  $scope.toDone = function(story){

    if (confirm('Are you sure you have checked all the DOD items ?')) {
      $http({
        url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories/" + story.id,
        method: "PUT",
        data: {
          "name": story.name,
          "valeur_metier": story.valeur_metier,
          "effort_technique": story.effort_technique,
          "zone": 'product_done'
        }
      }).then(function(response) {
        refresh();
      })
    } else {  
    }
  }

  refresh();
});
