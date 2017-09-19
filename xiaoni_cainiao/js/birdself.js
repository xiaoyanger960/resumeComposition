/**
 * Created by admin on 2017/8/14.
 */
//图片切换
var oBox=document.getElementById('box');
var aUl = oBox.getElementsByTagName('ul');
var aImg = aUl[0].getElementsByTagName("li");
var index = 0;
var timerid = tid = null;
// 切换按钮
/*  for(var i=0;i<aNum.length;i++)
 {
 aNum[i].index = i;
 aNum[i].onmouseover = function(){
 show(this.index);
 }
 }*/
oBox.onmouseover = function(){
    clearInterval(tid)
}
oBox.onmouseout = function(){
    autoPlay();
}
// 自动播放
autoPlay();

function autoPlay(){
    tid=setInterval(function(){
        index++;
        index>=aImg.length&&(index=0);
        show(index);
    },2000)

}

function show(now){
    index = now;
    var alpha = 0;
    /*  for(var i=0;i<aNum.length;i++)aNum[i].className='';
     aNum[index].className="current"*/

    for(i=0;i<aImg.length;i++){
        aImg[i].style.opacity = 0;
        aImg[i].style.filter = "alpha(opacity=0)";
    }


    clearInterval(timerid)
    timerid=setInterval(function(){
        alpha+=2;
        alpha>100&&(alpha=100);
        aImg[index].style.opacity=alpha/100;
        aImg[index].style.filter="alpha(opacity="+alpha+")";
        alpha==100&&clearInterval(timerid)
    },20)
}

//透明按钮的显示
window.onload = function(){
        var oUl = document.getElementById('ul');
        var oLi = oUl.getElementsByTagName("li");
        var aLiWidth = oLi[0].offsetWidth;
        var oBtLeft = document.getElementById('LeftB');
        var oBtRight = document.getElementById("RightB");
        var oBtLBg = document.getElementById('buttonBgL');
        var oBtRBg = document.getElementById('buttonBgR');
        var _imgNow = 0;
        var _now = 0;

        oBtLBg.onmouseover = function(){
            oBtLeft.style.display = "block";
        }
        oBtLeft.onmouseover=function () {
            oBtLeft.style.display = "block";
        }
        oBtLBg.onmouseout = function(){
            oBtLeft.style.display = "none";
        }
        oBtLeft.onmouseout = function(){
            oBtLeft.style.display = "none";
        }
        oBtRBg.onmouseover = function(){
            oBtRight.style.display = "block";
        }
        oBtRight.onmouseover = function(){
            oBtRight.style.display = "block";
        }
        oBtRBg.onmouseout = function(){
            oBtRight.style.display = "none";
        }
        oBtRight.onmouseout = function() {
            oBtRight.style.display = "none";
        }}

//弹出模态框
var oBtnRegiser=document.getElementById("btnRegister");
var modal=document.querySelector(".modal");
oBtnRegiser.onclick=function (e) {
    e.preventDefault();
    modal.style.display="block";
    document.body.style.overflow="hidden";
}
//关闭模态框
var oClose=document.getElementById("close");
oClose.onclick=function () {
        modal.style.display="none";
        document.body.style.overflow="scroll";
    }

//产品展示
var oProduct=document.getElementById("product");
var oProductUl=oProduct.getElementsByTagName("ul")[0];
var proLi=oProductUl.getElementsByTagName("li");
var proTimer=null;

oProductUl.innerHTML += oProductUl.innerHTML;
// 重新计算ul的宽度，
oProductUl.style.width = proLi.length * proLi[0].offsetWidth + 'px';

proTimer = setInterval(function () {
    if (oProductUl.offsetLeft < -oProductUl.offsetWidth / 2) {
        oProductUl.style.left = 0;
    }
    oProductUl.style.left = oProductUl.offsetLeft - 10 + 'px';
}, 500);

