
function doMove(obj,attr,dir,target,endFn){
    dir = parseInt(getStyle(obj,attr))<target? dir:-dir; // 控制方向
    clearInterval(obj.timerid);
    obj.timerid=setInterval(function(){
        var pos = parseInt(getStyle(obj,attr)) + dir;  // 每次运动多少
        if(pos > target && dir >0) { // 向左运动
            pos= target;
        }
        if(pos < target && dir <0){ // 向右运动
            pos = target;
        }
        obj.style[attr] = pos + 'px';
        if(pos==target){ // 到达目标后，执行回调函数的条件
           clearInterval(obj.timerid);
           endFn&&endFn();
        }
    },30)
}
function clone(oLi,oUl,aLiWidth){
    //parent = oldEl.parentNode;
    oClone = oLi[0].cloneNode(true); // 使用内置的 cloneNode
    oUl.appendChild(oClone);
    oUl.style.width = aLiWidth*(oLi.length+1);
}
function clone2(oLi,oUl,aLiWidth){
    //parent = oldEl.parentNode;
    oClone = oLi[oLi.length-1].cloneNode(true); // 使用内置的 cloneNode
    oUl.insertBefore(oClone,oLi[0]);
    oUl.style.width = aLiWidth*(oLi.length+1);
}

window.onload = function(){
    var oUl = get.byId('ul');
    var oLi = get.byTagName("li",oUl);
    var aLiWidth = oLi[0].offsetWidth;
    console.log(aLiWidth);
    var oBtLeft = get.byId('LeftB');
    var oBtRight = get.byId("RightB");
    var oBtLBg = get.byId('buttonBgL');
    var oBtRBg = get.byId('buttonBgR');
    var _imgNow = 0;
    var _now = 0;
    
    oBtLBg.onmouseover = function(){
        oBtLeft.style.display = "block";
    }
    oBtLBg.onmouseout = function(){
        oBtLeft.style.display = "none";
    }
    oBtRBg.onmouseover = function(){
        oBtRight.style.display = "block";
    }
    oBtRBg.onmouseout = function(){
        oBtRight.style.display = "none";
    }

    oBtRight.onclick = function(){  //向右走
        if(_now==oLi.length-1){     //当前画面是最后一个
            clone(oLi,oUl,aLiWidth);
            _now = 0;
        }
        else _now++;
        _imgNow++;
        doMove(oUl,'left',100,-aLiWidth*_imgNow,function(){
            if(_now==0){
                oUl.removeChild(oUl.lastElementChild);
                oUl.style.left=0;
                _imgNow=0;
            }

        });
    }
    oBtLeft.onclick = function(){//向左走
        if(_now==0){
            clone2(oLi,oUl,aLiWidth);
            oUl.style.left = -990 + 'px';
            _now = oLi.length-1;
            _imgNow ++;
        }
        else _now--;
        _imgNow--;
        doMove(oUl,'left',100,-aLiWidth*_imgNow,function(){
            if(_now==oLi.length-1){
                oUl.removeChild(oUl.firstElementChild);
                oUl.style.left = -aLiWidth*(oLi.length-1) + 'px';
                _imgNow= oLi.length-1;
                _now = oLi.length-1;
            }
        });
    }
    /*----------------------分享按钮滑出--------------------------*/
    var oUl3 = get.byId('share');
    oUl3.onmouseover = function(){
        doMove(oUl3,'right',50,0,function(){});
    }
    oUl3.onmouseout = function(){
        doMove(oUl3,'right',50,-191,function(){});
    }
}

/**************************登录窗口*******************************/
//弹出模态框
var oBtnRegiser=get.byId("btnRegister");
var modal=get.byClsName(".modal");
oBtnRegiser.onclick=function (e) {
    e.preventDefault();
    modal.style.display="block";
    document.body.style.overflow="hidden";
}
//关闭模态框
var oClose=get.byId("close");
oClose.onclick=function () {
    modal.style.display="none";
    document.body.style.overflow="scroll";
}
/*-----------------------无缝轮播滚动----------------------------*/
// 计算图片的移动函数
    function moveList(obj,old,iTarget){
        clearInterval(obj.timer)
        obj.timer=setInterval(function(){
            var iSpeed = (iTarget-old)/10;
            // 整除
            iSpeed = iSpeed>0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
            if(iTarget==old){
                clearInterval(obj.timer)
            }else{
                old +=iSpeed;
                obj.style.left = old + 'px';
            }
        },30)
    }

    var oUl = get.byId('wrap');
    var aLi = get.byTagName("li",oUl);
    var oBtnWrapL = get.byId('btnWrapL');
    var oBtnWrapR = get.byId("btnWrapR");
    var ind = 0;

    oUl.innerHTML=oUl.innerHTML + oUl.innerHTML + oUl.innerHTML;  //复制三个
    var oneWidth = parseInt(getStyle(oUl,'width'));
    oUl.style.width = aLi.length*aLi[0].offsetWidth + 'px';  //重新计算oUl的宽度
    oUl.style.left = -oneWidth + 'px';  //将中间的一个放中间

    oBtnWrapR.onclick = function(){
            if(ind>=aLi.length/3){
                ind = 0;
                oUl.style.left = -oneWidth + 'px';
            }
            moveList(oUl,-(ind*aLi[0].offsetWidth+oneWidth),-((ind+1)*aLi[0].offsetWidth+oneWidth));
            ind++;
    }

    oBtnWrapL.onclick = function(){
            if(ind==0){
                ind = aLi.length/3;
                oUl.style.left = -oneWidth + 'px';
            }
            moveList(oUl,-(ind*aLi[0].offsetWidth+oneWidth),-((ind-1)*aLi[0].offsetWidth+oneWidth));
            ind--;
    }






