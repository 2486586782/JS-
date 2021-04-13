function getElementoffsettop(obj){   //传入指定元素
    let odivoffsettop=obj.offsetTop;   //设置当前元素的offsetTOP
    let parent=obj.offsetParent;         //查找当前元素的offsetparent   
    while(parent != null){                 //判断当前offsetparent是否为空
        odivoffsettop=odivoffsettop+parent.clientTop+parent.offsetTop; //设置循环如果为空计算，
        parent=parent.offsetParent                                         //否则查找当前offsetparent继续循环
    }
return odivoffsettop+'px';               
}



/*调用*/
let sumoffsettop=getElementoffsettop(odiv);
console.log(sumoffsettop)