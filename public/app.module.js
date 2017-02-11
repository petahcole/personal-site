(function() {
  angular
    .module('personal', ['ui.router', 'ngMaterial'])
      .component('main', {
        controller: 'mainController',
        templateUrl: '/main/main.html'
      })
}())
