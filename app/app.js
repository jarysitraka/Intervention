var myApp = angular.module('myApp',['ui.router','ngCookies','ngMaterial','chart.js','ui.calendar']);
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
        .state('interventions',{
            url : "/interventions",
            controller : "InterventionCtrl",
            templateUrl: "views/interventions.html"
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
        })
        .state('technicians',{
            url : "/technicians",
            controller : "TechniciansCtrl",
            templateUrl: "views/technicians.html"
        })
        .state('planning',{
            url : "/planning",
            controller : "PlanningCtrl",
            templateUrl: "views/planning.html"
        })
        .state('home',{
            url : "/home",
            controller : "",
            templateUrl: "views/home.html"
        })
        .state('addIntervention',{
            url : "/intervetion/add",
            controller : "InterventionAddCtrl",
            templateUrl: "views/AddIntervention.html"
        });

}]);
