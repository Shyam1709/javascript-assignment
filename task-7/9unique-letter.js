function unique(str){
var output = str.split('').filter(function(item, i, ar){
   return ar.indexOf(item) === i;
  }).join('');
  return output;

}
console.log(unique("ababdefegg"));
