myApp.controller('chatController', ['$scope', 'Socket', function($scope, Socket){
  
  $scope.users = [];
  $scope.messages = [];
  
  //Connect a user when they navigate to chat page
  Socket.connect();
  
  //Disconnect user when they nagivate chat page
  $scope.$on('$locationChangeStart', function(event){
    Socket.disconnect(true);
  });
  
  //Prompt for a username
  var promptUsername = function(message){
    bootbox.prompt(message, function(name){
      if(name != null)
        Socket.emit('add-user', {username: name});
      else
        promptUsername('You must enter a username!');
    });
  };
  
  $scope.sendMessage = function(msg){
    if(msg != null && msg != '')
      Socket.emit('message', {message: msg});
    $scope.msg = '';
  };
  
  //Call promptUsername function to prompt for username
  promptUsername("What is your name?");
  
  //Request for users in the chatroom
  Socket.emit('request-users', {});
  
  //Get users from server
  Socket.on('users', function(data){
    $scope.users = data.users;
  });
  
  //Get message from server
  Socket.on('message', function(data){
    $scope.messages.push(data);
  });
  
  //Add user to users and message to notify that user has entered channel
  Socket.on('add-user', function(data){
    $scope.users.push(data.username);
    $scope.messages.push({username: data.username, message: ' has entered the channel'});
    console.log($scope.messages + ' object message')
  });
  
  //Remove user from users array and add message to notify user has left the channel
  Socket.on('remove-user', function(data){
    promptUsername(data.message);
  });
}]);