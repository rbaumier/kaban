app.controller('StoriesController', function($scope, $http, $stateParams) {

  var url = "http://localhost:8080/projects/" + $stateParams.projectId + "/sprints/" + $stateParams.sprintId + "/stories"
  $http({
    url: url,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $scope.loadingProjects = false;
  })
})