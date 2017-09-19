var get = {
       byId:function(id){
           return document.getElementById(id);
       },

       byClsName:function(clsName,oParent){
           var newClass=[];
           var reg=new RegExp("(^| )"+clsName+"( |$)");
           var allEl = this.byTagName("*",oParent);
           for(var i=0;i<allEl.length;i++)reg.test(allEl[i].className)&&newClass.push(allEl[i]);
           return newClass
       },
       byTagName:function(el,obj){
           return ( obj||document).getElementsByTagName(el);
       }
   }

function getStyle(obj,attr){
   if(obj.currentStyle){
       return obj.currentStyle[attr];
   }else{
       return getComputedStyle(obj,false)[attr];
  }
}

  //淡入淡出
  function fadeIn(el){
    var iCur = getStyle(el,'opacity');
    if(iCur == 1){return false};
    var value = 0;
    clearInterval(el.timer);
    el.timer=setInterval(function(){
        var iSpeed = 5;
        if(value==100){
            clearInterval(el.timer)
        }else{
            value +=iSpeed;
            el.style.opacity = value/100;
            el.style.filter="alpha(opacity="+value+")";
        }
    },30)

  }

  function fadeOut(el){
    var iCur = getStyle(el,'opacity');
    if(iCur == 0){return false};
    var value = 100;
    clearInterval(el.timer);
    el.timer=setInterval(function(){
        var iSpeed = -5;
        if(value==0){
            clearInterval(el.timer)
        }else{
            value +=iSpeed;
            el.style.opacity = value/100;
            el.style.filter="alpha(opacity="+value+")";
        }
    },30)
  }