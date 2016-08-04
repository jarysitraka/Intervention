


myApp.factory('CustomersFactory',function ($http, $q) {
    var factory ={
        customers : false,
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
        }
    };
    return factory;
});
