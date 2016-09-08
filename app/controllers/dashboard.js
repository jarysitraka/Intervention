myApp.controller('DashboardCtrl', function ($scope,$cookies,$location) {
    if($cookies.getObject('connected')==null){
        $location.path("");
    }
    $scope.$parent.pageTitle='Dashboard';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
});

myApp.controller("horizontal", function ($scope) {

    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

});

myApp.controller("pie", function ($scope) {

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];

});

myApp.controller("radar", function ($scope) {

    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];

});