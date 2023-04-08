function kiemtra (x){
    var y = x.toString().split("").reverse().join("");
    if(x===y){
        return console.log('true');
    }else return console.log('flase');
    }
    
    kiemtra('MADAM');
    kiemtra('1234');