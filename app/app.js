
var myApp = angular.module('myApp',['ngRoute']);


myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: 'views/home.html', controller: 'PostsCtrl'})
        .when('/comments/:id',{templateUrl: 'views/comments.html', controller : 'CommentsCtrl'})
        .otherwise({redirectTo : '/'});
}]);