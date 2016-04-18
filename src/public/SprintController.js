app.controller('SprintController', function($scope, $http, $stateParams) {

  $http({
    url: "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $scope.loadingProjects = false;
  })
})