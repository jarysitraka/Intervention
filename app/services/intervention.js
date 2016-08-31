myApp.factory('InterventionFactory',function ($http, $q) {
    var factory ={
        interventions : false,
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
            var intervention = {};
            var interventions = factory.getInterventions().then(function (interventions) {
                angular.forEach(interventions, function(value, key) {
                    if(value.Id==id){
                        intervention = value;
                        
                    }
                });
                deferred.resolve(interventions);

            }, function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        }
    };
    return factory;
});
