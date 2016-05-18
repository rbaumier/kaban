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

  $scope.toBacklog = function(story) {
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

  $scope.toPlanning = function(story) {
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

  $scope.toDone = function(story) {

    tasksAreDone(story.id, function(areDone) {
      if (areDone) {
        $http({
          url: "http://localhost:8080/projects/" + $stateParams.projectId,
          method: "GET"
        }).then(function(response) {
          $scope.DoD = response.data.DoD || ['DoD is empty'];
          swal({
              title: "Are you sure?",
              text: "Are you sure you have checked all the DOD items ?<br><div><ul>" + $scope.DoD.map(function(el) {
                return '<li style="text-align:left; padding:20px"><strong>' + el + '</strong></li>'
              }).join(),
              type: "warning",
              html: true,
              showCancelButton: true,
              confirmButtonColor: "#81b03d",
              confirmButtonText: "Yes!",
              cancelButtonText: "No!",
              closeOnConfirm: false,
              closeOnCancel: false
            },
            function(isConfirm) {
              if (isConfirm) {
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
                  swal(
                    "Added to Done!",
                    "",
                    "success"
                  );
                });
              } else {
                swal(
                  "Cancelled",
                  "Get to work ! Complete the DoD first !",
                  "error"
                );
              }
            }
          );
        });
      } else {
        swal(
          "Cancelled",
          "You have to Complete all tasks from this story before moving it to product done",
          "error"
        )
      }
    })
  }

  function tasksAreDone(storyId, f) {
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories/" + storyId + "/tasks",
      method: "GET",
    }).then(function(response) {
      f(response.data.every(function(task) {
        return task.zone === "DONE";
      }))
    })
  }

  refresh();
});