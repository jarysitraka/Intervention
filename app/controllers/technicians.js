myApp.controller('TechniciansCtrl',function ($scope, $rootScope, TechnicianFactory,$cookies) {

    $scope.loading=true;
    $scope.technicians = [];
    TechnicianFactory.getTechnicians().then(function (TechnicianFactory) {
        $scope.$parent.pageTitle='Technicians';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.technicians = TechnicianFactory;
        $scope.loading=false;
        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
    
    
});