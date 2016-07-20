/**
 * Created by jarys on 07/07/2016.
 */
myApp.factory('PostsFactory',function ($http, $q, $timeout) {

    var factory = {
        posts :false,
        getPosts :function(){
            var deferred = $q.defer();
            if(factory.posts!=false){
                deferred.resolve(factory.posts);
            }
            else{
                $http.get('posts.json')
                    .success(function (data) {
                        factory.posts = data;
                        $timeout(function () {
                            deferred.resolve(factory.posts);
                        },2000);
                    }).error(function (response) {
                    deferred.reject(response);
                });
            }
            return deferred.promise;

        },
        getPost :function (id) {
            var deferred = $q.defer();
            var post = {};
            var posts = factory.getPosts().then(function (posts) {
                angular.forEach(posts, function(value, key) {
                    if(value.id==id){
                        post = value;
                    }
                });
                deferred.resolve(post);
            }, function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        },
        add : function (comment) {
            var deferred = $q.defer();
            //...
            deferred.resolve();
            return deferred.promise;
        }
    };

    return factory;
});