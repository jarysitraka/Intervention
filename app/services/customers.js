


myApp.factory('CustomersFactory',function ($http, $q) {
    var factory ={
        customers : false,
        projects :false,
        getCustomers: function () {
            var deferred = $q.defer();
            if(factory.customers!=false){
                deferred.resolve(factory.customers);
            }
            else {
                $http.get('http://localhost:3821/api/Customers')
                    .success(function (data) {
                        factory.customers = angular.fromJson(data);
                        //console.log(factory.customers);
                        deferred.resolve(factory.customers);
                    })
                    .error(function (response) {
                        Materialize.toast(response, 3000, 'red');
                        deferred.reject(response);
                    });
            }
            return deferred.promise;
        },

        getCustomer: function (id){
            var deferred = $q.defer();
            var customer = {};
            var customers = factory.getCustomers().then(function (customers) {
                angular.forEach(customers, function(value, key) {
                    if(value.Id==id){
                        customer = value;
                    }
                });
                deferred.resolve(customer);
                
            }, function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        },

        getProjectsCustomer: function (id) {
            var deferred = $q.defer();
            if(factory.projects!=false){
                deferred.resolve(factory.projects);
            }
            else {
                $http.get('http://localhost:3821/api/Customers/'+id+'/projects')
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
        }
    };
    return factory;
});
