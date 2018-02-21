function randomString(){
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
 var string_length = 8;
 var random = '';
 for (var i=0; i<string_length; i++) {
  var rnum = Math.floor(Math.random() * chars.length);
  random += chars.substring(rnum,rnum+1);
 }
 return random;
}
 console.log(randomString());
