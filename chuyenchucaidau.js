function doitenhoa (x){
   y =   x.split(" ");
   var newarray = [];
   for(var i = 0 ; i<y.length;i++){
      newarray.push(y[i].charAt(0).toUpperCase()+y[i].slice(1))
   }
   return newarray.join(" ");
}
console.log(doitenhoa("nguyen quang duy"))