function nguyenAm(x){
    var y = x.toLowerCase();
    var str = "ueoai";
    var dem = 0;
    for(var i=0 ;i<y.length;i++){
        if(str.indexOf(y[i]) !== -1 ){
            dem +=1;
        }
    }
    return dem;
}
console.log("so nguyen am la ",nguyenAm("the quick brown fox"))