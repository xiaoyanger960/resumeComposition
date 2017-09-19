/**
 * Created by admin on 2017/8/30.
 */
//document.ready的简写方式 DOM加载完成后执行
$(function() {
    //闭包的书写方式
    (function () {
        //找到能切换图片的大模块
        var ChangePhoto=$("#change-photo");
        //找到包含大图的li数组
        var bigPhotos=ChangePhoto.find(" ul li");
        //找到包含小图的li数组
        var smallPhotos=ChangePhoto.find("ol li");
        //找到存放信息的p节点
        var info=ChangePhoto.find("p");
        //该数组用于插入信息至p节点中
        var arrText=["重要的是沿途的风景","你在看风景，而我在看你","浏览祖国大好河山"];
        //设置初始变量为0 指向数组中下标第一个
        var iNow=0;
        //当需要停止定时器时，就需要先声明周期任务的定时器序号
        var tid=null;

        //设置自动播放的函数
        autoPlay();
        function autoPlay() {
            //设置周期性定时器 每隔2秒钟，在大图和小图激活状态执行之前给临时变量不停加1
            //临时变量不停增加 通过向文本数组的长度取模 总能不停得到0,1,2
            //将此三个参数循环传送给fade()函数执行
            tid=setInterval(function () {
                iNow++;
                iNow%=arrText.length;
                fade();
            },2000)
        }

        //当我鼠标移出该模块时，自动播放就应该暂停，鼠标移出 继续自动播放
        //hover合成事件      $(..).hover(function(){...},function(){...})
        ChangePhoto.hover(function () {
            clearInterval(tid);
        },autoPlay)
        //为什么这里autoPlay不用加（） 如果加了是一个已经执行函数的结果

        //大图的淡入淡出以及小图的激活状态显示
        function fade() {
            //遍历当前大图中的li ,elem.each(function(i){.......}),这个操作中变量i指的就是当前元素的下标，而this指当前元素
            //当遍历的li元素和下标与临时变量不等时，让这些元素统统淡去 并让小图移出激活状态样式
            bigPhotos.each(function (index) {
                if(index!=iNow){
                    bigPhotos.eq(index).fadeOut().css("zIndex",1);
                    smallPhotos.eq(index).removeClass("change-active");
                }else{
                    bigPhotos.eq(index).fadeIn().css("zIndex",2);
                    smallPhotos.eq(index).addClass("change-active");
                }
            })
            //同时文本内容要随着临时变量是多少来改变
            info.text(arrText[iNow]);
        }

        //当点击小图时，直接把该小图的小标值赋给临时变量 并且立即执行淡入淡出函数
        //$("要查找的元素").index("所有元素")  返回的是要查找元素在所有元素中的下标位置
        smallPhotos.click(function () {
            iNow=$(this).index("#change-photo ol li");
            console.log(iNow);
            fade();
        })
    })();
})