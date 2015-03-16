angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main.html',
            controller: 'ProductCtrl'
        })
}]);