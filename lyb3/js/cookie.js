jQuery.extend({
	setCookie:function(user,text,day){
		var myDate=new Date();
		var msday=myDate.getTime()+day*24*3600*1000;
			 myDate.setTime(msday);
		document.cookie=user+"="+text+"; expires="+myDate.toGMTString();
	},
	getCookie:function(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
	},
	delCookie:function(user){
		var myDate=new Date();		
		var ms=myDate.getTime();
		myDate.setTime(ms-1000); 
		document.cookie=user+"=''"+"; expires="+myDate.toGMTString();
	}
})