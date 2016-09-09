myApp.controller('InterventionCtrl',function ($scope, $rootScope, InterventionFactory,$cookies) {

    $scope.$parent.pageTitle='Interventions';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

    
});