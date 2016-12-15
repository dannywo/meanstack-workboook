var Customer = require('../models/customer');

module.exports = function(router){
  router.post('/customer', function(req, res){
    console.log(req.body);
    var customer = new Customer();
    customer.firstname = req.body.firstname;
    customer.lastname = req.body.lastname;
    customer.phone = req.body.phone;
    if(req.body.address){
      customer.address.street = req.body.address.street;
      customer.address.city = req.body.address.city;
      customer.address.state = req.body.address.state;
      customer.address.zip = req.body.address.zip;
    }
    
    customer.save(function(err,data){
      if(err)
        throw err;
      res.json(data);
    });
  });
};