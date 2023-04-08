function daoso(a)
{
var arr = [];
  for (var x = 0, y=1; x < a.length; x++,y++) 
  {
   arr[x]=a.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, arr.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<arr.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += arr[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
   console.log(combi.join("\n"));
}

daoso("dog");