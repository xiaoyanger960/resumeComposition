/**
 * Created by admin on 2017/9/1.
 */
//document.ready的简写方式 DOM加载完成后执行
$(function() {
    //闭包的书写方式
    (function () {
        tab($(".news-list-header ol "),$(".news-content"),"click");

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
                    aEl.removeClass("current-news");
                    $(this).addClass("current-news");
                    //将内容区的所有ul隐藏 只显示当前下标对应的ul内容
                    oContent.hide().eq(index).show();
                })
            })
        }


    })()
})
