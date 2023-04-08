function nguyento(x){
    if(x==1||x==2){
        return console.log("so nguyen to ")
    } else{
        var dem = 0 ;
       for(var i = 1 ; i<x/2;i++){
          if(x%i==0){
            dem +=1;
          }
       }
       if(dem == 1){
        console.log("day la so nguyen to ")
    }else console.log("khong la so nguyen to ")
    }
}
nguyento(10);
nguyento(5);