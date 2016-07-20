/**
 * Created by jarys on 07/07/2016.
 */

myApp.factory('LoginFactory', function ($http, $q, $cookies) {
    var factory ={
        login : false,
        add : function (credential) {
            var deferred = $q.defer();//j'initialise une tache qui va s'excecuter dans le futur
                if(factory.login!=false){
                    deferred.resolve(factory.login);//todo cookies
                }
                else{
                    //console.log(credential);
                    $http.post('http://localhost:3821/api/Login',credential)
                        .success(function (data) {
                            factory.login = angular.fromJson(data);
                                console.log(factory.login);
                                $cookies.putObject('connected', factory.login);
                                deferred.resolve(factory.login);
                        })
                        .error(function (response) {
                            deferred.reject(response);
                        });
                }
                return deferred.promise;
        }
    };
    return factory;
});