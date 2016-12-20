myApp.controller('chatController', ['$scope', 'Socket', function($scope, Socket){
  
  //Connect a user when they navigate to chat page
  Socket.connect();
  
  //Disconnect user when they nagivate chat page
  $scope.$on('$locationChangeStart', function(event){
    Socket.disconnect(true);
  });
}]);