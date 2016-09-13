myApp.controller('TechniciansCtrl',function ($scope, $rootScope, TechnicianFactory,$cookies) {
    $scope.load=false;
    $scope.loading=true;
    $scope.technicians = [];
    $scope.technician = {};
    $scope.groups = [];
    TechnicianFactory.getTechnicians().then(function (TechnicianFactory) {
        $scope.$parent.pageTitle='Technicians';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.technicians = TechnicianFactory;

        $scope.details($scope.technicians[0].Id);

        //$scope.technician = $scope.technicians[0];
        $scope.loading=false;
        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });


    $scope.details = function (id) {
        $scope.load=true;
        $scope.technician = TechnicianFactory.getTechnician(id).then(function (tech) {

            $scope.technician=tech;
            //Materialize.toast("liste bien recuper", 3000, 'blue')
        }, function (msg) {
            Materialize.toast(msg, 3000, 'red');
        });

        $scope.groups = TechnicianFactory.getTechnicianGroups(id).then(function (grp) {

            $scope.groups=grp;

            console.log(grp);

            $scope.load=false;
            //Materialize.toast("liste bien recuper", 3000, 'blue')
        }, function (msg) {
            Materialize.toast(msg, 3000, 'red');
        });

        $scope.labels1 =["Box internet", "Laptop", "TV","Maintenance"];

        $scope.data1 = [
            [3, 2, 2,0]//,
            //[28, 48, 40, 19, 96, 27, 100]
        ];


    }


    
    
});