
myApp.factory('TechnicianFactory',function ($http, $q) {

    var factory ={
        technicians : false,
        technician : {},
        groups :false,
        getTechnicians: function () {
            var deferred = $q.defer();
            if(factory.technicians!=false){
                deferred.resolve(factory.technicians);
            }
            else {
                $http.get('http://localhost:3821/api/Technicians')
                    .success(function (data) {
                        factory.technicians = angular.fromJson(data);
                        //console.log(factory.customers);
                        deferred.resolve(factory.technicians);
                    })
                    .error(function (response) {
                        Materialize.toast(response, 3000, 'red');
                        deferred.reject(response);
                    });
            }
            return deferred.promise;
        },
        getTechnician: function (id){
            var deferred = $q.defer();

            $http.get('http://localhost:3821/api/Technician/'+id+'')
                .success(function (data) {
                    factory.technician = angular.fromJson(data);
                    //console.log(factory.customers);
                    deferred.resolve(factory.technician);
                })
                .error(function (response) {
                    Materialize.toast(response, 3000, 'red');
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        getTechnicianGroups: function (id){
            var deferred = $q.defer();

            $http.get('http://localhost:3821/api/Technician/'+id+'/Groups')
                .success(function (data) {
                    factory.groups = angular.fromJson(data);
                    //console.log(factory.customers);
                    deferred.resolve(factory.groups);
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
