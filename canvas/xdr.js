//In IE
var xdr = new XDomainRequest();
xdr.onload = function() {
	alert(xdr.responseText);
};
xdr.onerror = function() {
	alert("An Error occured!");
};
xdr.open("get","http://www.baidu.com/");
xdr.send(null);