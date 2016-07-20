myApp.controller('DashboardCtrl', function ($scope,$cookies,$location) {
    if($cookies.getObject('connected')==null){
        $location.path("");
    }
    $scope.$parent.pageTitle='Dashboard';
    $scope.$parent.cookieUsername=$cookies.getObject('connected');
});
