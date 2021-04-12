function randow(max,min){ return Math.floor(Math.random()*(max-min)+min) }
function ceeatCode(){
let code="";
let codelength=4;
let arr=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
for(var i=0;i<codelength;i++){
let index=randow(0,62);
code=code+arr[index];
}
return code;
}