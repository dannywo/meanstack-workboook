myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api){
  $scope.form = {};
  $scope.customers = [];
  
  //Query all customers and display on the table
  Api.Customer.query({}, function(data){
    $scope.customers = data;
  });
  
  //Get customer info from the form, add to db, then clear form
  $scope.addToDatabase = function(){
    Api.Customer.save({}, $scope.form, function(){
      // $scope.form = {};
    });
  };
  
  //Delete single customer
  $scope.delete = function(index){
    Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
      $scope.customers.splice(index, 1);
    });
  };
  
  
}]);