myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api) {
  $scope.form = {};
  $scope.customers = [];
  $scope.pageSize = 5;
  $scope.currentPage = 1;

  //Query all customers and display on the table
  Api.Customer.query({}, function(data) {
    $scope.customers = data;
  });

  //Get customer info from the form, add to db, then clear form
  $scope.addToDatabase = function() {
    console.log('add clicked');
    Api.Customer.save({}, $scope.form, function(data) {
      $scope.customers.push(data);
      // $scope.form = {};  
    });
  };

  //Delete single customer
  $scope.delete = function(index) {
    bootbox.confirm("Are you sure you want to delete this customer?", function(answer) {
      if (answer === true) {
        Api.Customer.delete({id: $scope.customers[index]._id}, function(data) {
          $scope.customers.splice(index, 1);
          bootbox.alert("Customer Deleted")
        });
      }
    });
  };

  //Delete all customers
  $scope.deleteAll = function() {
    Api.Customer.delete({}, function(data) {
      $scope.customers = []
    })
  }

}]);
