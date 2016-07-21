/**
 * Created by jarys on 21/07/2016.
 */
myApp.controller('CustomersCtrl',function ($scope, $rootScope, CustomersFactory) {
    $scope.customers = CustomersFactory.getCustomers().then(function (CustomersFactory) {
        $scope.customers = CustomersFactory;
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red')
    });
});