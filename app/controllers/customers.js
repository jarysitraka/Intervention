/**
 * Created by jarys on 21/07/2016.
 */
myApp.controller('CustomersCtrl',function ($scope, $rootScope, CustomersFactory,$cookies) {
    $scope.customers = CustomersFactory.getCustomers().then(function (CustomersFactory) {
        $scope.$parent.pageTitle='Customers';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.customers = CustomersFactory;

        

        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});