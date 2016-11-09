var ethJson = {
  jsonGem: {
    "address":"",
    "checksumAddress":"",
    "privKey":"",
    "pubKey":"",
    "publisher":"ethJson",
    "encrypted":false,
    "version":2
  },
  init: function(address){
    this.buildData(address)
    this.elementCatch()
    this.render()
  },
  buildData: function(address){
    this.jsonGem.address = "0x" + address || "0x"
    this.jsonGem.pubKey = "0x" + address || "0x"
    this.jsonGem.pubKey = "0x" + address.toString(16) || "0x"
  },
  elementCatch: function(){
    this.el = document.getElementById("target");
    this.template = document.getElementById("template").innerHTML;
  },
  render: function(){
    var data = {
      jsonGem: this.jsonGem,
    };
    console.log(data);
    this.el.innerHTML = Mustache.render(this.template, data);
  }
}

ethJson.init("032e29Af6573a89adDca8D400cEc7a4C38B5a685");
