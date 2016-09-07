myApp.factory('InterventionFactory',function ($http, $q) {
    var factory ={
        interventions : false,
        intervention : {},
        getInterventions: function () {
            var deferred = $q.defer();
            if(factory.interventions!=false){
                deferred.resolve(factory.interventions);
            }
            else {
                $http.get('http://localhost:3821/api/Interventions')
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
        },
        getIntervention: function (id){
            var deferred = $q.defer();

            $http.get('http://localhost:3821/api/Interventions/'+id+'')
                    .success(function (data) {
                        factory.intervention = angular.fromJson(data);
                        //console.log(factory.customers);
                        deferred.resolve(factory.intervention);
                    })
                    .error(function (response) {
                        Materialize.toast(response, 3000, 'red');
                        deferred.reject(response);
                    });
            return deferred.promise;
        }
    };
    return factory;
});
