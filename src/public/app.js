var app = angular.module('kaban', ['ui.router', 'ui.bootstrap'])

app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "views/home.html",
      controller: "MainController"
    })
    .state('404', {
      url: "/404",
      templateUrl: "views/404.html"
    })
    .state('project', {
      url:"/project",
      templateUrl: "views/project.html",
      controller: "ProjectController"
    })
    .state('sprints', {
      url:"/project/:projectId/sprints",
      templateUrl:"views/sprint.html",
      controller: "SprintController"
    })
    .state('stories', {
      url:"/project/:projectId/sprints/:sprintId/stories",
      templateUrl:"views/stories.html",
      controller: "StoriesController"
    })
    .state('task', {
      url:"/project/:projectId/sprints/:sprintId/stories/:storyId/tasks",
      templateUrl:"views/tasks.html",
      controller: "TaskController"
    })

  $urlRouterProvider.otherwise("/404");
});
