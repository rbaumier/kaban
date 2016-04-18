var app = angular.module('kaban', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
  //
  //

  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "views/project.html",
      controller: "MainController"
    })
    .state('404', {
      url: "/404",
      templateUrl: "views/404.html"
    })

  // $urlRouterProvider.otherwise("/404");
});