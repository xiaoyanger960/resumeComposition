/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 16-4-17
 * Time: 上午12:27
 * To change this template use File | Settings | File Templates.
 */
window.onload = function(){
    eco.app.inp();
   // eco.app.sort();
};
var eco = {};

eco.ui = {};
eco.ui.textChange = function(obj,str){
    obj.onfocus = function(){
        if(this.value == str){
            this.value = '';
        }
    };
    obj.onblur = function(){
         if(this.value == ''){
            this.value = str;
        }
    };
};
eco.app = {};
eco.app.inp = function(){
    var oText1 = document.getElementById('text1');
    var oText2 = document.getElementById('text2');
    eco.ui.textChange(oText1,'Search website');
    eco.ui.textChange(oText2,'Search website');
};





  sort();
  function sort(){
    var oSort = document.getElementById('sort');
    var aDd = oSort.getElementsByTagName('dd');
    var aUl = oSort.getElementsByTagName('ul');
    var aH2 = oSort.getElementsByTagName('h2');

    for(var i=0;i<aDd.length;i++){
        aDd[i].index = i;
        aDd[i].onclick = function(ev){
            var ev = ev || window.event;
            var This = this;
            for(var j=0;j<aUl.length;j++){
                aUl[j].style.display = 'none';
            }
            aUl[this.index].style.display = 'block';

            document.onclick = function(){
                aUl[This.index].style.display = 'none';
            };

            ev.cancelBubble = true; //阻止冒泡
        };
    }
	
	
    for(var i=0;i<aUl.length;i++){
        aUl[i].index = i;
        (function(ul){
            var aLi = ul.getElementsByTagName('li');
            for(var j=0;j<aLi.length;j++){
                aLi[j].onmouseover = function(){
                    this.className = 'active';
                }
                aLi[j].onmouseout = function(){
                    this.className = '';
                }
                aLi[j].onclick = function(ev){
                    var ev = ev|| window.event;
                    aH2[this.parentNode.index].innerHTML = this.innerHTML;
                    this.parentNode.style.display = 'none';
					ev.cancelBubble = true;
                };
            }
        })(aUl[i]);
    }
};