angular.module('app', ['ngResource', 'ngRoute', 'ui.router']);

angular.module('app').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: '/partials/main/main.html'
    })
}]);