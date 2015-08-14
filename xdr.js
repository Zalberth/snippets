var xdr = new XDomainRequest();
xdr.onload = function() {
	alert(xdr.responseText);
};
xdr.open("get","http://www.baidu.com/");
xdr.send(null);