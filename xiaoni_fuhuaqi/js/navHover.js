/**
 * Created by admin on 2017/9/1.
 */
$(function() {
    //闭包的书写方式
    (function () {
        var $oList=$(".nav-content ul li");
        var $oDl=$(".nav-content ul li dl");
        $oList.click(function (event) {
            $(this).addClass("nav-current").siblings().removeClass("nav-current");
            $oDl.hide();
            $(this).find("dl").css("display","block");
            event.stopPropagation();

        })

    /*    $oDl.mouseout(function () {
            var tid=null;
            clearInterval(tid);
            setInterval(function () {
                $(this).hide();
            },2000)
        })*/

        $(document).click(function () {
            $oDl.hide();
        })

    })()
})