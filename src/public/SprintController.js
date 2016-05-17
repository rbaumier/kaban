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
    $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId,
      method: "GET"
    }).then(function(response) {
      $scope.project = response.data;
      $scope.project.DoD = response.data.DoD || [];
      $scope.project.DoD.push("Add an item in DoD");
    });
  }
    $scope.editorEnabled = false;
    
    $scope.disableEditor = function(index) {
      $scope.editorEnabled[index] = false;
    };
    
    $scope.save = function(index, attr) {
      console.log(attr);
      console.log(index);
      $scope.project.DoD[index] = attr;
      $scope.disableEditor();
      $http({
      url: "http://localhost:8080/projects/" + $stateParams.projectId,
      method: "PUT",
      data: $scope.project
      }).then(function(response) {
        $scope.refresh();
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

  refresh();
})
