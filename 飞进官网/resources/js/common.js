window.onload = function() {

  /******************联系我们******************/
  (function() {
    var $name = $(".public-footer-form .contact-list>li").eq(0).find("input");
    var $company = $(".public-footer-form .contact-list>li").eq(1).find("input");
    var $mobile = $(".public-footer-form .contact-list>li").eq(2).find("input");
    var $Email = $(".public-footer-form .contact-list>li").eq(3).find("input");
    var $msg = $(".public-footer-form .contact-list>li").eq(4).find("textarea");
    var $qrcode = $(".public-footer-form .contact-list li").eq(5).find("input");
    var $sumbit = $(".public-footer-form .contact-list>li").eq(6).find("input");
    var $upWindow = $(".up-window-wrap").eq(0);
    var $close = $(".up-window-wrap .close-window");

    var regMobile = /^1(3|4|5|7|8)\d{9}$/;
    var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    $sumbit.on("click", function() {
      if($name.val()) {
        if($company.val()) {
          if($mobile.val()) {
            if(regMobile.test($mobile.val())) {
              if($Email.val()) {
                if(regEmail.test($Email.val())) {
                  if($msg.val()) {
                    if($qrcode.val()) {
                      if($qrcode.val().length === 6){
                        $upWindow.fadeIn();
                      }else{
                        alert("验证码有误，请重新输入");
                      }
                    } else {
                      alert("请输入验证码");
                    }
                  } else {
                    alert("描述您的需求");
                  }
                } else {
                  alert("请输入有效邮箱")
                }
              } else {
                alert("请输入您的邮箱");
              }
            } else {
              alert("手机号码有误，请重新输入");
            }
          } else {
            alert("请输入您的手机号码");
          }
        } else {
          alert("请输入公司名称");
        }
      } else {
        alert("请输入您的姓名");
      }
    })
    $close.on("click", function() {
      $upWindow.fadeOut();
    })
  })()

}