/**
 * Created by Administrator on 17-8-25.
 */
//document.ready的简写方式 DOM加载完成后执行
$(function(){

    // 切换搜索框(采用闭包写法)
    ;(function(){

        var aLi = $('.search ul li');
        var oText = $('.search-center').find('.search-part input[type=text]');
        var arrText=[
            '例如：荷棠鱼坊烤鱼 或 樱花日本料理',
            '例如: 撒哈拉大沙漠，夏威夷岛',
            '例如: 湘味楼50元现金抵用券',
            '例如: 关于如何写出一本50000字的自传',
            '例如: 中国传统美味小吃'
        ];
        //设置一个默认的初始值为0 指向数组中的第一个下标
        var iCur = 0;
        //直接改变搜索框中的默认值 使其值为文本数组中的第一个文本
        oText.val(arrText[iCur]);
        //遍历标题中的Li,elem.each(function(i){.......}),这个操作中变量i指的就是当前元素的下标，而this指当前元素
        aLi.each(function(iNow){

            $(this).click(function(){
                aLi.removeClass("search-current").eq(iNow).addClass("search-current");
                //这个赋值是为了把标题中的数组下标传递给输入框文本数组的下标
                iCur = iNow;
                //文本框中的值进行相应的修改
                oText.val(arrText[iCur]);
             })
        });

        //当文本框获得焦点时进行判断,如果读取的当前文本框的值与文本数组中的值一致 就使其值为空
        oText.focus(function(){
             if($(this).val()==arrText[iCur]){
                 $(this).val('');
             }
        });
        //当文本框失去焦点时，如果文本框中没有任何东西 就把默认的值给它
        oText.blur(function(){
            if($(this).val()==''){
               $(this).val(arrText[iCur]);
               }
        })

    })();

})