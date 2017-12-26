
window.onload = function() {
  
  /******************联系我们******************/
  (function(){
    var $name = $(".public-footer-form .contact-list>li").eq(0).find("input");
    var $company = $(".public-footer-form .contact-list>li").eq(1).find("input");
    var $mobile = $(".public-footer-form .contact-list>li").eq(2).find("input");
    var $Email = $(".public-footer-form .contact-list>li").eq(3).find("input");
    var $msg = $(".public-footer-form .contact-list>li").eq(4).find("textarea");
    var $qrcode = $(".public-footer-form .contact-list li").eq(5).find("input");
    var $sumbit = $(".public-footer-form .contact-list>li").eq(6).find("input");
    var $upWindow = $(".up-window-wrap").eq(0);
    var $close = $(".up-window-wrap .close-window");
    
    $sumbit.click(function(){
      if($name.val() && $company.val() && $mobile.val() && $Email.val() && $msg.val() && $qrcode.val()){
        $upWindow.fadeIn();
      }
    })
    $close.click(function(){
      $upWindow.fadeOut();
    })
  })()
  
  
}