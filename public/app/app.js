angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.html',
            controller: 'MainCtrl'
        })
});

angular.module('app').controller('MainCtrl',function($scope){

});