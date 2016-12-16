var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngResource', 'ngAnimate']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
    $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: 'aboutController'});
    $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'contactController'});
    $routeProvider.when('/projects', {templateUrl: '/partials/projects.html', controller: 'projectsController'});
    
    $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
    
    //if no valid routes are foind, redirect to home
    $routeProvider.otherwise({redirectTo: '/home'});
    
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);