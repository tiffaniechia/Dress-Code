angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main.html',
            controller: 'MainCtrl'
        })
});

