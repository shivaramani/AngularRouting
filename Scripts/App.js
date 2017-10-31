var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state("viewA", {
        url:'/viewA',
        templateUrl: 'viewA.html',
        controller: 'ctrlA',
      })
    .state("viewB", {
        url:'/viewB',
        templateUrl: 'viewB.html',
        controller: 'ctrlB',
      });
  }
]);