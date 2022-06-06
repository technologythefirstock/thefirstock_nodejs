
'use strict';

class AFirstock {

  constructor() {
    if (this.constructor == AFirstock) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  async getPosts() {
    throw new Error("Method 'say()' must be implemented.");
  }

  getUsers() {
    throw new Error("Method 'say()' must be implemented.");
  }
  getPostByUserId() {
    throw new Error("Method 'say()' must be implemented.");
  }

  login() {
    
  }
  logout() {

  }
  getUserDetails(){

  }
  placeOrder(){

  }
  orderMargin(){

  }
  orderBook(){

  }
  cancelOrder(){

  }
  modifyOrder(){

  }
  singleOrderHistory(){

  }
  tradeBook(){

  }
  positionsBook(){

  }
  productConversion(){

  }
  holdings(){

  }
  limits(){

  }
  getQuotes(){

  }
  searchScripts(){

  }
  getSecurityInfo(){

  }
  getIndexList(){

  }
  getOptionChain(){

  }
  spanCalculator(){

  }
  timePriceSeries(){
    
  }

}

module.exports = AFirstock