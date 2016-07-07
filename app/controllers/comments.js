/**
 * Created by jarys on 07/07/2016.
 */
myApp.controller('CommentsCtrl', function($scope,$rootScope, PostsFactory , $routeParams) {

    $rootScope.loading=true;

    $scope.newComment ={};

    var post = PostsFactory.getPost($routeParams.id).then(function (post) {
        $rootScope.loading=false;
        $scope.title= post.name;
        $scope.comments = post.comments;
    }, function (msg) {
        alert(msg)
    });

    $scope.addComment = function () {
        $scope.comments.push($scope.newComment);

        PostsFactory.add($scope.newComment).then(function () {

        }, function () {
           alert('insertion tsy mety');
        });


        $scope.newComment ={};
    }

});