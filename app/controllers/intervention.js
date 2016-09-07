myApp.controller('InterventionCtrl',function ($scope, $rootScope, InterventionFactory,$cookies) {
    $scope.loading=true;
    $scope.interventions = [];
    InterventionFactory.getInterventions().then(function (InterventionFactory) {
        $scope.$parent.pageTitle='Interventions';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.interventions = InterventionFactory;
        $scope.loading=false;
        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});


myApp.controller('InterventionDetailsCtrl',function ($scope, $rootScope, InterventionFactory,$stateParams,$cookies) {
    $scope.loading=true;
    $scope.intervention = InterventionFactory.getIntervention($stateParams.id).then(function (intervention) {
        $scope.$parent.pageTitle="Intervention.detail";//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
        $scope.intervention=intervention;
        $scope.interventionGroup =$scope.intervention.Group;
        $scope.loading=false;
        //console.log("reo e"+customer.Interventions[0].Remarks);
        Materialize.toast("mety", 3000, 'green');
        //Materialize.toast("liste bien recuper", 3000, 'blue')
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});
