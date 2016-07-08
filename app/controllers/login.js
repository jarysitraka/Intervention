/**
 * Created by jarys on 07/07/2016.
 */

myApp.controller('LoginCtrl', function ($scope, LoginFactory) {
    $scope.$parent.pageTitle='Login Management app';
    $scope.userLogin = {
        email:"",
        password:""
    };

    $scope.login = function () {


        LoginFactory.add($scope.userLogin).then(function (data) {


        }, function () {
            alert('insertion tsy mety');
        });

        $scope.newComment ={};
    }
});
    

