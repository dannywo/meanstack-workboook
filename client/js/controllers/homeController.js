myApp.controller('homeController', ['$scope', function($scope){
    
    $scope.myInterval = 3000;
    
    $scope.slides = [{
        image:"img/IMG_1.jpg",
        id: 0
    },{
        image:"img/IMG_2.jpg",
        id: 1
    },{
        image:"img/IMG_3.jpg",
        id: 2
    }];
}]);