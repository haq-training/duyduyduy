function doitenhoa (x){
    y =   x.split(" ");
    var max = 0;
    for(var i = 0 ; i<y.length;i++){
       if(y[i].length>max){
        max = y[i].length
        var ten = y[i];
       }
    }
    return ten ;
 }
 console.log(doitenhoa("nguyen quang dnfbfjbjdfvS"))