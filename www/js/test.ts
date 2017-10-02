class Customer {

  public userName = "Monaca";
  public secretID = 123;
}

var user1 = new Customer();

console.log(user1.userName);// no error => Monaca
console.log(user1.secretID);// error found => could not access user1.secretID!