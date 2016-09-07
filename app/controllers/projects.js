




myApp.controller('ProjectsCtrl',function ($scope, $rootScope, ProjectsFactory,$cookies) {
    $scope.loading=true;
    $scope.projects = [];
    ProjectsFactory.getProjects().then(function (ProjectsFactory) {
        $scope.$parent.pageTitle='Projects';//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers

        $scope.projects = ProjectsFactory;
        $scope.loading=false;

    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});


myApp.controller('ProjectsDetailsCtrl',function ($scope, $rootScope, ProjectsFactory,$stateParams,$cookies) {

    $scope.loading=true;

    $scope.project = ProjectsFactory.getProject($stateParams.id).then(function (project) {
        $scope.$parent.pageTitle=project.Name;//à mettre sur tous les controllers
        $scope.$parent.cookieUsername=$cookies.getObject('connected');//à mettre sur tous les controllers
        $scope.project=project;
        $scope.projectInterventions = project.Interventions;
        Materialize.toast(project.Name, 3000, 'green');
        $scope.loading=false;
    }, function (msg) {
        Materialize.toast(msg, 3000, 'red');
    });
});