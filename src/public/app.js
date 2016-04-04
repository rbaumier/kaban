var app = angular.module('kaban', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/404");
  //
  // Now set up the states
  $stateProvider.html5mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/project.html"
    })
});