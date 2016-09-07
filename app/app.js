var myApp = angular.module('myApp',['ui.router','ngCookies','ngMaterial']);
myApp.config(['$stateProvider',function($stateProvider){
    $stateProvider
        .state('login',{
            url :"/",
            controller : "LoginCtrl",
            templateUrl: 'views/login.html'
        })
        .state('dashboard',{
            url : "/dashboard",
            controller : "DashboardCtrl",
            templateUrl: "views/dashboard.html"
        })
        .state('customers',{
            url : "/customers",
            controller : "CustomersCtrl",
            templateUrl: "views/customers.html"
        })
        .state('customerDetails',{
            url :"/customer/:id",
            controller:"CustomersDetailsCtrl",
            templateUrl:"views/customersDetail.html"
        })
        .state('interventionDetails',{
            url :"/intervention/:id",
            controller:"InterventionDetailsCtrl",
            templateUrl:"views/interventionDetail.html"
        })
        .state('projects',{
            url : "/projects",
            controller : "ProjectsCtrl",
            templateUrl: "views/projects.html"
        })
        .state('projectDetails',{
            url :"/project/:id",
            controller:"ProjectsDetailsCtrl",
            templateUrl:"views/projectDetail.html"
        });

}]);
