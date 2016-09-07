

myApp.factory('ProjectsFactory',function ($http, $q) {
    var factory ={
        interventions : false,
        projects :false,
        getProjects: function () {
            var deferred = $q.defer();
            if(factory.projects!=false){
                deferred.resolve(factory.projects);
            }
            else {
                $http.get('http://localhost:3821/api/Projects')
                    .success(function (data) {
                        factory.projects = angular.fromJson(data);
                        //console.log(factory.customers);
                        deferred.resolve(factory.projects);
                    })
                    .error(function (response) {
                        Materialize.toast(response, 3000, 'red');
                        deferred.reject(response);
                    });
            }
            return deferred.promise;
        },
        getProject: function (id){
            var deferred = $q.defer();
            var project = {};
            var projects = factory.getProjects().then(function (projects) {
                angular.forEach(projects, function(value, key) {
                    if(value.Id==id){
                        project = value;

                    }
                });

                deferred.resolve(project);

            }, function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        },
        getInterventionsProject: function (id) {
            var deferred = $q.defer();
            if(factory.interventions!=false){
                deferred.resolve(factory.interventions);
            }
            else {
                $http.get('http://localhost:3821/api/project/'+id+'/interventions')
                    .success(function (data) {
                        factory.interventions = angular.fromJson(data);
                        //console.log(factory.customers);
                        deferred.resolve(factory.interventions);
                    })
                    .error(function (response) {
                        Materialize.toast(response, 3000, 'red');
                        deferred.reject(response);
                    });
            }
            return deferred.promise;
        }


    };
    return factory;
});
