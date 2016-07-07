/**
 * Created by jarys on 07/07/2016.
 */
myApp.controller('PostsCtrl',function ($scope, $rootScope, PostsFactory) {
    $rootScope.loading=true;
    $scope.posts = PostsFactory.getPosts().then(function (PostsFactory) {
        $rootScope.loading=false;
        $scope.posts = PostsFactory;
    }, function (msg) {
        alert(msg);
    });
});