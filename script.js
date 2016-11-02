//1.random(m)
function random(m){
    return Math.floor(Math.random()*m+1);
}


//2.max(a,b)
function max(a,b){
    if(a>b) return a;
    else return b;}
    
    
//3.lastChart(arr)
function lastChart(arr){
    return arr[arr.length-1];
}    

//4.squares(a,b){
function squares(a,b){
    return (a*a+b*b);}

//5.
function leap(year){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 ==0)) {
        return true;}
    else {return false;}}
