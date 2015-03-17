angular.module('app', ['ngResource', 'ngRoute', 'ui.router']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: '/partials/main/main.html'
    });

}]);