'use strict';
var ethJson = function(address){
  this.pubKey = address;
}
ethJson.generate = function(){
  this.generateJSON();
}
ethJson.prototype.generateJSON = function() {
  return {
    address: this.getAddressString(),
    publisher:"ethJson",
    encrypted:false,
    version:2
  }
}
ethJson.prototype.getAddressString = function() {
  return '0x' + this.getAddress().toString('hex')
}
ethJson.prototype.getAddress = function() {
  if (typeof this.pubKey == "undefined") {
    return ethUtil.privateToAddress(this.privKey)
  }
  else {
    return ethUtil.publicToAddress(this.pubKey, true)
  }
}
module.exports = ethJson;
