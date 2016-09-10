myApp.controller('InterventionAddCtrl',function ($scope, $rootScope, InterventionFactory,$cookies) {

    $scope.$parent.pageTitle='Nouvelle intervention';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

    
});