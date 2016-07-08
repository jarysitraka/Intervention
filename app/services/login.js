/**
 * Created by jarys on 07/07/2016.
 */

myApp.factory('LoginFactory', function ($http, $q) {
    var factory ={
        login : false,
        add : function (credential) {
            var deferred = $q.defer();
                if(factory.login!=false){
                    deferred.resolve(factory.login);//todo cookies
                }
                else{
                    console.log(credential);
                    $http.post('http://localhost:3821/api/Login',credential)
                        .success(function (data) {
                            factory.login = data;

                                console.log("mety"+factory.login);
                                deferred.resolve(factory.login);

                        })
                        .error(function () {
                            deferred.reject('login failed');
                        });
                }
                return deferred.promise;
        }
    };
    return factory;
});