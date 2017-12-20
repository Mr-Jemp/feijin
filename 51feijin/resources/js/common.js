
window.onload = function() {
  /*操作头部导航区的样式*/
  var oHeader = document.getElementsByClassName("public-header")[0];
  var oLogo = oHeader.getElementsByClassName("logo")[0];
  var oImg = oLogo.getElementsByTagName("img")[0];
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if(scrollTop > 20){//页面刷新保留header的样式操作
    oHeader.style.backgroundColor = "#fff";
    oHeader.style.color = "#000";
    oImg.src = "./resources/img/logo_color.png";
  }
  function setHeadStyle(){
  	//实时获取滚动条距离顶部的值
  	scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  	if(scrollTop > 20){
	    oHeader.style.backgroundColor = "#fff";
	    oHeader.style.color = "#000";
	    oImg.src = "./resources/img/logo_color.png";
	  }else{
	  	oHeader.style.backgroundColor = "transparent";
      oHeader.style.color = "#fff";
      oImg.src = "./resources/img/logo.png";
	  }
  }
  //firefox
  if(document.addEventListener){
  	document.addEventListener("DOMMouseScroll",setHeadStyle,false)
  }
  //IE、Opera、Chrome
  window.onscroll = document.onscroll = setHeadStyle;
  
}