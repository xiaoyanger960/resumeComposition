/**
 * Created by Administrator on 06-1-2.
 */
$(function() {
// 滑动的文字update
    (function () {
        // 找对象
        var oUpDate = $('.update');
        //找到需要动态添加li的ul
        var oUl = oUpDate.find('ul');
        var arrData = [
            {'name': '萱萱', 'time': 5, 'title': "那些灿烂华美的瞬间", 'url': 'http://www.163.com'},
            {'name': '低调组合', 'time': 5, 'title': "嘻嘻哈哈", 'url': 'http://www.163.com'},
            {'name': '小白', 'time': 7, 'title': "我就是如此的白皙", 'url': 'http://www.163.com'},
            {'name': '讯哥', 'time': 10, 'title': "我是如何做到这么抠的", 'url': 'http://www.163.com'},
            {'name': '孙漂亮', 'time': 9, 'title': "世上怎么有我这么漂亮的人", 'url': 'http://www.163.com'},
            {'name': '晨宇', 'time': 12, 'title': "我的滑板鞋 最时尚", 'url': 'http://www.163.com'},
            {'name': 'MC天佑', 'time': 20, 'title': "一人我饮酒醉", 'url': 'http://www.163.com'},
            {'name': '吴亦凡', 'time': 30, 'title': "你有freeStyle吗", 'url': 'http://www.163.com'},
            {'name': 'PG万磁王', 'time': 40, 'title': "向万磁王势力低头 ", 'url': 'http://www.163.com'},
        ];
        var iH = 0;
        var iNow = 0;
        var oBtnUp = $('#updateUpBtn');
        var oBtnDown = $('#updateDownBtn');
        var timid = null;

        var str = '';
        //遍历arrDate数组
        for (var i = 0; i < arrData.length; i++) {
            str += '<li><a href="' + arrData[i].url + '"><strong>' + arrData[i].name + '</strong> <span>' +
                arrData[i].time + '分前 </span>写了一篇新文章' + arrData[i].title + '...</a></li>';

        }
        oUl.html(str);

        iH = oUl.find('li').height();


        oBtnUp.click(function () {
            doMove(-1)
        });
        oBtnDown.click(function () {
            doMove(1);
        })
        oUpDate.hover(function () {
            clearInterval(timid);
        }, autoPlay)
        function autoPlay() {
            timid = setInterval(function () {
                doMove(-1);
            }, 3000)
        }

        autoPlay();

        function doMove(index) {
            iNow += index;

            if (Math.abs(iNow) > arrData.length - 1) {
                iNow = 0;
            }
            ;
            if (iNow > 0) {
                iNow = -(arrData.length - 1);
            }

            oUl.stop().animate({'top': iH * iNow}, 2000, 'bounceIn');
        }
    })();
})
