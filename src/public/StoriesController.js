app.controller('StoriesController', function($scope, $http, $stateParams) {

  var url = "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories"
  $scope.getStories = function() {
    $http({
      url: url,
      method: "GET"
    }).then(function(response) {
      $scope.stories = response.data;
      $scope.loadingProjects = false;
    })
  }

  $scope.createStory = function(name, valeur_metier, effort_technique, zone) {
    $http({
      url: url,
      method: "POST",
      data: {
        "name": name,
        "valeur_metier": valeur_metier,
        "effort_technique": effort_technique,
        "zone", zone
      }
    }).then(function(response) {
      $scope.getStories();
    })
  }
})