/**
 * Created by admin on 2017/8/27.
 */
//日历提示框 有待补充啊
//document.ready的简写方式 DOM加载完成后执行
$(function() {
    //闭包的书写方式
    (function () {
        //找到放有星期数据的对象
        var week = $(".lucky-bottom-header ol li");
        //找到有活动的li对象
        var aImg = $(".lucky-bottom-center .img");
        //找到弹出框对象
        var oPrompt = $(".prompt");
        //找到弹出框对象有存放图片的对象 find()是获取所有的子代元素而且括号中一定要写选择器
        var oImg = oPrompt.find("p");
        //找到弹出框中存放星期数据的对象
        var oWeek = oPrompt.find("h5");
        //找到弹出框中的相应描述信息
        var oInfo = oPrompt.find(".prompt-right-bottom");

        //当鼠标移入到有活动的li对象时，给它增加边框的类 并且显示弹出框
        aImg.hover(function () {
            aImg.removeClass("border");
            $(this).addClass("border");
            var iTop = $(this).position().top - 30;
            var iLeft = $(this).position().left + 50;
            var index = $(this).index() % week.size();

            oPrompt.show().css({"left": iLeft, "top": iTop});
            oInfo.text($(this).attr("info"));
            oWeek.text(week.eq(index).text());
            oImg.css("background", $(this).css("background"));
        }, function () {
            oPrompt.hide();
        })
    })()
})