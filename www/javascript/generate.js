   window.onload=function()         
    {
    document.getElementById('btnGen').addEventListener('click',createPassword);             //calling createPassword() when GENERATE button presssed!!
    document.getElementById('btnGen').addEventListener('click',labl);
                       //calling lalbl() when GENERATE button presssed!! if(/\d/.test(ps))
    }

function createPassword(e)
{

 var length=document.getElementById('passIn').value;
 if(length<1)
{
  document.getElementById("bash").style.backgroundColor='BLACK';
}
else if(length<5)
{
  document.getElementById("bash").style.backgroundColor='RED';
}
else if(length<8)
{
  document.getElementById("bash").style.backgroundColor='ORANGE';
}
else if(length>=8 && length <29)
{
  document.getElementById("bash").style.backgroundColor='#3cad7e';
}
else if(length>=29 && length<33)
{
  document.getElementById("bash").style.backgroundColor='BLUE';
}
else
{
document.getElementById("bash").style.backgroundColor='BLACK';
}  


if ((document.getElementById('L').checked)&&(document.getElementById('U').checked)&&(document.getElementById('D').checked)&&(document.getElementById('S').checked))
{
start: while(true)
  {
    var ps= Array(parseInt(length)).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');


  if(/\d/.test(ps))
  if(/[^\da-zA-Z]/.test(ps))
  if(/[A-Z]/.test(ps))
  if(/[a-z]/.test(ps))
  var len=ps.length;
  if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}

else if ((document.getElementById('L').checked)&&(document.getElementById('U').checked)&&(document.getElementById('D').checked))
{
  start: while(true)
  {
var ps= Array(parseInt(length)).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/\d/.test(ps))
  if(/[A-Z]/.test(ps))
  if(/[a-z]/.test(ps))
  if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
  
}



else if ((document.getElementById('L').checked)&&(document.getElementById('U').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
   var ps= Array(parseInt(length)).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/[^\da-zA-Z]/.test(ps))
  if(/[A-Z]/.test(ps))
  if(/[a-z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}

else if ((document.getElementById('L').checked)&&(document.getElementById('D').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
   var ps= Array(parseInt(length)).fill("0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/\d/.test(ps))
  if(/[^\da-zA-Z]/.test(ps))
  if(/[a-z]/.test(ps))
  if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}



else if ((document.getElementById('U').checked)&&(document.getElementById('D').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
 var ps= Array(parseInt(length)).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/\d/.test(ps))
  if(/[^\da-zA-Z]/.test(ps))
  if(/[A-Z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
}




else if ((document.getElementById('L').checked)&&(document.getElementById('D').checked))
{
  start: while(true)
  {
     var ps= Array(parseInt(length)).fill("0123456789abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/\d/.test(ps))
  if(/[a-z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);

}




else if ((document.getElementById('L').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
      var ps= Array(parseInt(length)).fill("Z!#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/[^\da-zA-Z]/.test(ps))
  if(/[a-z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
  
}




else if ((document.getElementById('L').checked)&&(document.getElementById('U').checked))
{
  start: while(true)
  {
 var ps= Array(parseInt(length)).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/[A-Z]/.test(ps))
  if(/[a-z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
    

}




else if ((document.getElementById('U').checked)&&(document.getElementById('D').checked))
{
  start: while(true)
  {
  var ps= Array(parseInt(length)).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/[A-Z]/.test(ps))
  if(/\d/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps); 
 

}





else if ((document.getElementById('U').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
 var ps= Array(parseInt(length)).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/[^\da-zA-Z]/.test(ps))
  if(/[A-Z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}




else if ((document.getElementById('D').checked)&&(document.getElementById('S').checked))
{
  start: while(true)
  {
    var ps= Array(parseInt(length)).fill("0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
  if(/\d/.test(ps))
  if(/[^\da-zA-Z]/.test(ps))
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}




else if (document.getElementById('L').checked==true)
{
  start: while(true)
  {
   var ps= Array(parseInt(length)).fill("abcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
}





else if (document.getElementById('U').checked)
{
  start: while(true)
  {
 var ps= Array(parseInt(length)).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}




else if (document.getElementById('D').checked)
{
  start: while(true)
  {
  var ps= Array(parseInt(length)).fill("0123456789").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
 
}





else if (document.getElementById('S').checked)
{
  start: while(true)
  {
    var ps= Array(parseInt(length)).fill("!#$%&'()*+,-./:;<=>?@[]^_`{|}~").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
var len=ps.length;
   if(len!=length) continue start;
  break;
}
if(length>32)
ps="You dont need that!"
  document.getElementById('result').innerHTML=(ps);
}
else
{ 
  document.getElementById("bash").style.backgroundColor='PURPLE';
var ps="NO INPUT!";
    document.getElementById('result').innerHTML=(ps); }

}


function labl(c)      //Fn to print password text when button triggered
{
var txt="Your Random Password is:";
document.getElementById('text').innerHTML=(txt);       //Printing txt inside div with id 'text'
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
   swal("Copied!","Password to Clipboard","success");
}
