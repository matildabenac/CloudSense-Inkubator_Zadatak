function getCookie(Attribute){
	if(document.cookie.indexOf(Attribute+"=") == -1){
		return "";
	} else {
		var begin = document.cookie.indexOf(Attribute+"=") + Attribute.length+1;
		var end = document.cookie.indexOf(";", begin);
		if(end == -1) end = document.cookie.length;
		return unescape(document.cookie.substring(begin, end));
	}
}

function setCookie(Attribute, Value){
	var ExpireDate = new Date();
	ExpireDate.setTime(ExpireDate.getTime() + (30*24*3600*1000));
	document.cookie = Attribute + "=" + escape(Value) + "; expires= " + ExpireDate.toGMTString();
}

function delCookie(Attribute){
	var now = new Date();
	document.cookie = Attribute + "=; expires=" + now.toGMTString(); 
}
