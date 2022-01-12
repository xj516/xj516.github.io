// JavaScript Document

// 导航
$(function(){
	function setImages(wrapid,i){
		var _wrap = $("#"+wrapid);
		//获取当前路径
		var _file = GetRequest().f;

		// 循环添加图片
		var _img = new Image();
		_img.src = "work/"+_file+"/"+(i<10?'0'+i:i)+".jpg";
		_img.className = "picitem";

		//添加图片
        _img.onload = function(){
			_wrap.append(_img);
			i++;
        	setImages(wrapid,i);
        }
        _img.onerror = function(){
	        var _imggif = new Image();
	        _imggif.src = "work/"+_file+"/"+(i<10?'0'+i:i)+".gif";
	        _imggif.className = "picitem";
	    	//添加图片
			_imggif.onload = function(){
        		console.log(_imggif.src)
				_wrap.append(_imggif);
				i++;
        		setImages(wrapid,i);
			}
        }
	}
	setImages("picwrap",1);

	$(".picitem").each(function(index, el) {
		console.log(0)
		var _this = $(this),
			img = new Image();
    		img.src = _this.attr("src");
    	if(img.complete){
    		_this.css({"display":"block","width":img.width,"margin-left":-img.width/2})
		}else{
            // 完全加载完毕的事件
		    img.onload = function(){
    			_this.css({"display":"block","width":img.width,"margin-left":-img.width/2})
		    }
	    }
	});
	
});
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 

	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
		theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	}	
	return theRequest; 
} 


/*获取图片真实大小*/
function getImageWidth(url){
	var img = new Image();
	img.src = url;
	
	// 如果图片被缓存，则直接返回缓存数据
	if(img.complete){
	    return img.width;
	}else{
            // 完全加载完毕的事件
		    img.onload = function(){
			    return img.width;
		    }
    }
	
}

$(function(){
	var scrollFunc = function (e) {  
	e = e || window.event;  
	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
	    if (e.wheelDelta > 0) { //当滑轮向上滚动时
	  		if($(document).scrollTop()>100){  
		    	if(!$("#head").hasClass('show')){
		    		$("#head").addClass('show').removeClass('hide');
					$("#head").stop(true,true).animate({"top":0});
		    	}
	    	}else{
	    		//$("#head").addClass('show').removeClass('hide');
	    		$("#head").stop(true,true).animate({"top":0},0);
	    	}
	    }  
	    if (e.wheelDelta < 0) { //当滑轮向下滚动时 
	    	if($(document).scrollTop()>100){ 
		    	if(!$("#head").hasClass('hide')){
		    		$("#head").addClass('hide').removeClass('show');
					$("#head").stop(true,true).animate({"top":-120});
		    	}
	    	}
	    }  
	} else if (e.detail) {  //Firefox滑轮事件  
	    if (e.wheelDelta > 0) { //当滑轮向上滚动时
	  		if($(document).scrollTop()>100){  
		    	if(!$("#head").hasClass('show')){
		    		$("#head").addClass('show').removeClass('hide');
					$("#head").stop(true,true).animate({"top":0});
		    	}
	    	}else{
	    		//$("#head").addClass('show').removeClass('hide');
	    		$("#head").stop(true,true).animate({"top":0},0);
	    	}
	    }  
	    if (e.wheelDelta < 0) { //当滑轮向下滚动时 
	    	if($(document).scrollTop()>100){ 
		    	if(!$("#head").hasClass('hide')){
		    		$("#head").addClass('hide').removeClass('show');
					$("#head").stop(true,true).animate({"top":-120});
		    	}
	    	}
	    }   
	}  
	}  
	//给页面绑定滑轮滚动事件  
	if (document.addEventListener) {//firefox  
	document.addEventListener('DOMMouseScroll', scrollFunc, false);  
	}  
	//滚动滑轮触发scrollFunc方法  //ie 谷歌  
	window.onmousewheel = document.onmousewheel = scrollFunc;
});

