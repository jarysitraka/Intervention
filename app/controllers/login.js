/**
 * Created by jarys on 07/07/2016.
 */

myApp.controller('LoginCtrl', function ($scope, LoginFactory, $location, $timeout, $cookies) {
    $scope.$parent.pageTitle='Login Management app';
    $scope.userLogin = {
        email:"",
        password:""
    };
    $scope.$parent.cookieUsername=null;
    $cookies.remove('connected');

    $scope.login = function () {


        LoginFactory.add($scope.userLogin).then(function (data) {
            //console.log("io"+data);
            Materialize.toast('Login success <br/> you will be redirect to dashboard', 2000, 'teal');
            $scope.$parent.cookieUsername=$cookies.getObject('connected');
            //console.log($scope.cookieUsername.FullName);
            $timeout(function () {
                $location.path("/dashboard");
            },3000);
        }, function () {
            Materialize.toast('Invalid credentials, please try again', 3000, 'red')
        });
    }
});
    

