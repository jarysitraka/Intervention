myApp.controller('DashboardCtrl', function ($scope,$cookies,$location) {
    if($cookies.getObject('connected')==null){
        $location.path("");
    }
    $scope.$parent.pageTitle='Dashboard';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
});
