myApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    };
}]);

// var controllers = {};
// controllers.navController = function($scope, $location){
//     $scope.isActive = function(destination){
//         return destination === $location.path();
//     };
// };
// myApp.controller(controllers);W