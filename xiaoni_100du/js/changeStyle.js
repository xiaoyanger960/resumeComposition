/**
 * Created by admin on 2017/8/31.
 */
//BBS的高亮样式切换
$(function() {
    //闭包的书写方式
    (function () {
        $(".bbs-content ul li").mouseover(function () {
            var index=$(this).index();
            $(".bbs-content ul li").removeClass("bbs-active").eq(index).addClass("bbs-active");

        })
    })()
})