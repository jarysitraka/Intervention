/**
 * Created by jarys on 21/07/2016.
 */
myApp.controller('CustomersCtrl',function ($scope, $rootScope, CustomersFactory,$cookies) {
    $scope.customers = [];
    CustomersFactory.getCustomers().then(function (CustomersFactory) {
        $scope.$parent.pageTitle='Customers';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.customers = CustomersFactory;

        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});


myApp.controller('CustomersDetailsCtrl',function ($scope, $rootScope, CustomersFactory,$stateParams,$cookies) {
    $scope.customer = CustomersFactory.getCustomer($stateParams.id).then(function (customer) {
        $scope.$parent.pageTitle="Customer.detail";//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
        $scope.customer=customer;
        $scope.interventionsCustomer = customer.Interventions;
        
        //console.log("reo e"+customer.Interventions[0].Remarks);
        Materialize.toast("mety", 3000, 'green');
        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});