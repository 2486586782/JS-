function randow(max,min){ return Math.floor(Math.random()*(max-min)+min) }
function randomColor(){
    let a=randow(0,256);
    let b=randow(0,256);
    let c=randow(0,256);
    return "rgb("+a+','+b+','+c+")";
}