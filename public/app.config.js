(function() {
  'use strict';

  angular.module('personal').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']


  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

     $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'main'
      })

      $urlRouterProvider.otherwise('/')
    }

}());
