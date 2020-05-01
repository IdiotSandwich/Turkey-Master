var p1 = 'javascript:(function(){window.open("'
var p2 = ""
var p3 = '","targetname","height=500 ,width="+ screen.width +"");})()'
let container2 = document.querySelector("#container-2");

alert("alert");

function reverse(s){
  p2 = s
//alert(p2);
  document.getElementById("link-1").href=p1+p2+p3; 
  document.getElementById("link-2").href=p1+p2+p3; 
  
  if(s == ""){
    container2.style.display = "none";
  }else{
    container2.style.display = "flex";
  }
}
 
function set(el,text){
 while(el.firstChild)el.removeChild(el.firstChild);
 el.appendChild(document.createTextNode(text))}
 
/* setupUpdater will be called once, on page load.
 */
 
function setupUpdater(){
 var input=document.getElementsByTagName('input')[0]
   , reversed=document.getElementById('reversed')
   , count=document.getElementById('charCount')
   , orig=document.getElementById('original')
   , oldText=input.value
   , timeout=null;
 
/* handleChange is called 50ms after the user stops 
   typing. */
 function handleChange(){
  var newText=input.value;
  if (newText==oldText) return; else oldText=newText;
  set(reversed, reverse(newText));
  set(count, 'You entered '+newText.length+' characters.');
  set(orig, newText);
 }
 
/* eventHandler is called on keyboard and mouse events.
   If there is a pending timeout, it cancels it.
   It sets a timeout to call handleChange in 50ms. */
 function eventHandler(){
  if(timeout) clearTimeout(timeout);
  timeout=setTimeout(handleChange, 50);
 }
 
 input.onkeydown=input.onkeyup=input.onclick=eventHandler;
}
 
setupUpdater();
document.getElementsByTagName('input')[0].focus();
