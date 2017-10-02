var Customer = (function () {
    function Customer() {
        this.userName = "Monaca";
        this.secretID = 123;
    }
    return Customer;
})();

var user1 = new Customer();

console.log(user1.userName);
console.log(user1.secretID);
