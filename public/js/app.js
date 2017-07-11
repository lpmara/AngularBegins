(function() {
angular.module("MainApp", ['ngRoute', 'ngSanitize', 'ngResource', 'ngAnimate', 'mgcrea.ngStrap', 'ngMessages'])
angular.module("MainApp").config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
        .when("/", {
            templateUrl: '/views/index.html', controller: 'mainCtrl'
        })
        .when("/customers", {
            templateUrl: '/views/customers/customers.html', controller: 'customersCtrl'
        }).otherwise({
            redirectTo: "/"
        });
});
})();




