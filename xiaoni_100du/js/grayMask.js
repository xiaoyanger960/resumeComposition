/**
 * Created by admin on 2017/8/31.
 */
//document.ready的简写方式 DOM加载完成后执行
//鼠标移入图片上方 有灰色蒙版 上面显示人气信息
$(function() {
    //闭包的书写方式
    (function () {
        console.log("nihao");
        //定义人气信息数组
        var arrInfo=[
            "",
            "李小琳<br> 人气数量：1000",
            "郑爽<br> 人气数量：1000",
            "阿婆婆<br> 人气数量：23",
            "蒋梦捷<br> 人气数量：1240",
            "林志颖<br> 人气数量：11000",
            "李冰冰<br> 人气数量：19800",
            "天天<br> 人气数量：4000",
            "花落<br> 人气数量：900",
            "林一晨<br> 人气数量：34",
            "王力宏<br> 人气数量：106500"
        ];
        //当鼠标移入图片列表数组时，移出该所有Li下的p元素，给当前的li下添加p元素
        $oList=$(" .people-content ul li");
        $oList.mouseover(function () {
            if($(this).index()==0)return;
            $(".people-content ul li p").remove();

            $(this).append("<p style='width:"+($(this).width()-12)+"px;height:"+($(this).height()-12)+"px;'>"+
                           arrInfo[$(this).index()]+"</p>" );
        })
    })()
})