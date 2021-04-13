function getElementoffsetleft(obj){   //传入指定元素
    let odivoffsetleft=obj.offsetLeft;   //设置当前元素的offset
    let parent=obj.offsetParent;         //查找当前元素的offsetparent   
    while(parent != null){                 //判断当前offsetparent是否为空
        odivoffsetleft=odivoffsetleft+parent.clientLeft+parent.offsetLeft; //设置循环如果为空计算，
        parent=parent.offsetParent                                         //否则查找当前offsetparent继续循环
    }
return odivoffsetleft+'px';               
}


/*调用*/
let sumoffsetleft=getElementoffsetleft(odiv);
console.log(sumoffsetleft)