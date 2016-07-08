
var myApp = angular.module('myApp',['ui.router']);
myApp.config(['$stateProvider',function($stateProvider){
    $stateProvider
        .state('login',{
            url :"",
            controller : "LoginCtrl",
            templateUrl: 'views/login.html'
        })
        .state('dashboard',{
            url : "/dashboard",
            controller : "DashboardCtrl",
            templateUrl: "views/dashboard.html"
        });

        /*
            .when('/',{templateUrl: 'views/home.html', controller: 'PostsCtrl'})
            .when('/comments/:id',{templateUrl: 'views/comments.html', controller : 'CommentsCtrl'})
            .when('/login',{templateUrl: 'views/login.html', controller : 'LoginCtrl'})
            .otherwise({redirectTo : '/'});
        */

}]);