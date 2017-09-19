/**
 * Created by admin on 2017/8/27.
 * oList 包含该点击的标题li数组的ul或者ol
 * oContent 标题li所对应的需要切换的内容数组
 * ev 绑定事件的名字
 */
//切换选项卡
//document.ready的简写方式 DOM加载完成后执行
$(function() {
    //闭包的书写方式
    (function () {
        tab($(".shop-header ul"),$(".shop-content ol"),"click");
        tab($(".subway-header ul"),$(".subway-content ul"),"click");
        tab($(".advice-nav ul"),$(".advice-content ul"),"click");
        tab($(".coupons-nav ul"),$(".coupons-content ul"),"click");

        function tab(oList, oContent, ev) {
            //获取ul或者ol下的所有直接子元素li,要写var，声明为局部变量
            var aEl = oList.children();
            //将所有要切换的内容块隐藏只显示第一块的内容
            oContent.hide().eq(0).show();
            //遍历当前的li ,elem.each(function(i){.......}),这个操作中变量i指的就是当前元素的下标，而this指当前元素
            aEl.each(function (index) {
                //为当前点击的li 添加事件 ev代表在赋值时需要传递进来的事件名，后面是事件处理函数
                // jQueryObject.on( events [, selector ] [, data ], handler )
                $(this).on(ev, function () {
                    aEl.removeClass("active");
                    $(this).addClass("active");
                    aEl.removeClass("subway-active");
                    $(this).addClass("subway-active");
                    aEl.removeClass("advice-active");
                    $(this).addClass("advice-active");
                    aEl.removeClass("coupons-active");
                    $(this).addClass("coupons-active");
                    //将内容区的所有ul隐藏 只显示当前下标对应的ul内容
                    oContent.hide().eq(index).show();
                })
            })
        }
    })()
})