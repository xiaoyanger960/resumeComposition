/*******************************  Search website 点击消失  *************************************/
var $searchDie=$(".searchDie");
$searchDie.click(function () {
    $(this).val("");
    return false;
})
document.onclick=function () {
    if($searchDie.val()==""){
        $searchDie.val("Search website");
    }
}






/*******************************  banner  *************************************/

//获取对象
var $transparentLeft=$(".left-page");
var $bannerLeftBtn=$(".left");
var $transparentRight=$(".right-page");
var $bannerRightBtn=$(".right");
var $banner=$(".banner");


//鼠标移入按钮显示  鼠标移出按钮不显示
$transparentLeft.mouseover(function () {
    $bannerLeftBtn.css("opacity","0.5");
})
$bannerLeftBtn.mouseover(function () {
    $bannerLeftBtn.css("opacity","1");
    return false;
})
$transparentLeft.mouseout(function () {
    $bannerLeftBtn.css("opacity","0");
})
$transparentRight.mouseover(function () {
    $bannerRightBtn.css("opacity","0.5");
})
$bannerRightBtn.mouseover(function () {
    $bannerRightBtn.css("opacity","1");
    return false;
})
$transparentRight.mouseout(function () {
    $bannerRightBtn.css("opacity","0");
})
//切换banner
var $bannerFlag=1;
//左边按钮
$bannerLeftBtn.click(function () {
    if(!$banner.is(":animated")){
        //不在动画状态时，将当前banner的透明度逐渐降到0
        $banner.animate({opacity:0},"normal");
        var $timerLeft=setInterval(function () {
            //当透明度降低到0的动画结束时，改变banner的背景图，并将banner的透明度逐渐升到1
            if(!$banner.is(":animated")){
                if($bannerFlag===1){$bannerFlag=3;}else{$bannerFlag--;}
                $banner.css("background-image","url('img/banner0"+$bannerFlag+".jpg')");
                $banner.animate({opacity:1},"normal");
                clearInterval($timerLeft);
            }
        },1)
    }
})
//右边按钮
$bannerRightBtn.click(function () {
    if(!$banner.is(":animated")){
        //不在动画状态时，将当前banner的透明度逐渐降到0
        $banner.animate({opacity:0.3},"normal");
        var $timerLeft=setInterval(function () {
            //当透明度降低到0的动画结束时，改变banner的背景图，并将banner的透明度逐渐升到1
            if(!$banner.is(":animated")){
                if($bannerFlag===3){$bannerFlag=1;}else{$bannerFlag++;}
                $banner.css("background-image","url('img/banner0"+$bannerFlag+".jpg')");
                $banner.animate({opacity:1},"normal");
                clearInterval($timerLeft);
            }
        },1)
    }
})


