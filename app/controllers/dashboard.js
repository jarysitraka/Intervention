myApp.controller('DashboardCtrl', function ($scope,$cookies,$location,$timeout) {
    if($cookies.getObject('connected')==null){
        $location.path("");
    }

    $scope.loading = true;
    $timeout(function () {
        $scope.loading = false;
    },2000);


    $scope.$parent.pageTitle='Dashboard';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
});

myApp.controller("horizontal", function ($scope) {

    $scope.labels = ['Juin', 'Juillet', 'Août', 'Setpembre', 'Octobre', 'Novembre', 'Decembre'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [0, 0, 3, 3, 1, 0, 0],
        [0, 0, 1, 3, 0, 0, 0]
    ];

});

myApp.controller("pie", function ($scope) {

    $scope.labels = ["Terminées", "Planifiées", "En retard"];
    $scope.data = [3, 1, 3];

});

myApp.controller("radar", function ($scope) {

    $scope.labels =["Box internet", "Decoder", "Laptop", "poteau", "Antenne"];

    $scope.data = [
        [2, 2, 1, 0, 0]
    ];

});