function TabSwitch(fatherObj){
var _this=this;
this.tablis=fatherObj.children[0].getElementsByTagName("li");
this.conentDivs=fatherObj.getElementsByTagName("div");
for(var i=0;i<this.tablis.length;i++){
this.tablis[i].index=i;
this.tablis[i].onclick=function(){
    _this.clickFun(this.index);
}
}

}
TabSwitch.prototype.clickFun=function(index){
    for(var j=0;j<this.tablis.length;j++){
        this.tablis[j].className="";
        this.conentDivs[j].style.display="none"
    } 
this.tablis[index].className="active";
this.conentDivs[index].style.display="block"
}