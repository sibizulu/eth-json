(function() {
  var ethJson = (function() {

    var ethJson = function(address){
      this.pubKey = address;
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
      return '0x' + this.pubKey
    }
    ethJson.prototype.getAddress = function() {
      if (typeof this.pubKey == "undefined") {
        return ethUtil.privateToAddress(this.privKey)
      }
      else {
        return ethUtil.publicToAddress(this.pubKey, true)
      }
    }
  })();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
  module.exports = ethJson;
else
  window.ethJson = ethJson;

})();



