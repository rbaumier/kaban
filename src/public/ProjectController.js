app.controller('ProjectController', function($scope, $http){
  
  $scope.loadingProjects = true;

  $http({
    url: "http://localhost:8080/projects",
    method: "GET"
  }).then(function(response){
    console.log(response);
    $scope.loadingProjects = false;
  })
 })