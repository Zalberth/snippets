function createXHR () {
	// body...
	if ( typeof XMLHttpRequest != 'undefined' ) {
		return new XMLHttpRequest();
	} else if ( typeof ActiveXObject != 'undefined') {
		if ( typeof arguments.callee.activeXString != 'string' ) {
			var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],
				i, len;
			for ( i = 0, len = versions.length; i < len; i++ ) {
				try {
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch (ex) {
				//skip
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	} else {
		throw new Error("No XHR object available");
	}
}

var xhr = createXHR(); //create XHR
xhr.onreadystatechange = function() {
	if( xhr.readyState == 4 ) {
		if( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ) {
			alert(xhr.responseText);
			//alert(xhr.getResponseHeader('Date'))
		} else {
			alert("请求不成功：" + xhr.status);
		}
	}
};

//xhr.open('get','http://www.baidu.com',true);
//error:No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.

//xhr.open('get','forXHRtest.txt',true);
//如果是本地打开文件就会出现xhr.status = 0, 这是一个Opened的状态；所以正确使用需要在服务器上打开，比如在本地建一个Node.js应用来测试

xhr.open('get','bom1.html',true);

xhr.send(null);

//You can cancel an asynchronous before a response is received by calling the abort() 
//like this: xhr.abort();

//The following function helps to add query-string arguments to the end of an existing URL
function addURLParam( url, name, value ) {
	url += (url.indexOf('?') == -1 ? '?' : '&');
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	console.log(url);
	return url;
}

addURLParam('www.baidu.com');

function submitData(){
	var xhr = createXHR();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4){
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				alert(xhr.responseText);
			} else {
				alert('Request was unsuccessful:' + xhr.status);
			}
		}
	};
	xhr.open('post', 'postexample.php', true);
	//结合formSerialization.js使用！调用serialize函数
	//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	//var form = document.getElementById('user-info');
	//xhr.send(serialize(form));
}

//NEW in XMLHttpRequest Level 2
//FormData
//timeout
//overridMimeType


//about progress event,please compared with onreadystatechange

xhr.onload = function() {
	if( (xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 ) {
		alert(xhr.responseText);
	} else {
		alert("Request was unsuccessful:" + xhr.status);
	}
};
xhr.onprogress = function(event) {
	var divStatus = document.getElementById('status');
	if(event.lengthComputable) {
		divStatus.innerHTML = 'received' + event.position + 'of' + event.totalSize + 'bytes';
	}
};

//如果遇到www.baidu.com这种：No 'Access-Control-Allow-Origin' header is present on the requested resource
//考虑采用JSONP