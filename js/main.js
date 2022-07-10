var elSelect=document.querySelector('.birlik');
var elForm=document.querySelector('.form');
var elInput=document.querySelector('.form-control');
var piyoda=document.querySelector('.piyoda');
var velosiped=document.querySelector('.velosiped');
var mashina=document.querySelector('.mashina');
var samolyot=document.querySelector('.samolyot');
var piyodatez=3.6;
var velosipedtez =20.1;
var mashinatez =70;
var samalyottez =800;

function hisobla(yurush,tezlik) {
  var soat=Math.floor(yurush/tezlik);
  var minut=Math.floor((yurush/tezlik-soat)*60);
  var sekund=Math.floor(((yurush/tezlik-soat)*60-minut)*60);
  return (soat+' '+ 'soat'+' '+minut+' '+'minut'+' '+(sekund)+' '+'sekund');
}
;




elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var son=Number(elInput.value);
    var birlik=elSelect.value;
    elInput.value=null;
  if(son<=0) {
    alert("To'gri ma'lumot kiriting");
  }
 
 else if(birlik==='m') {
   
   piyoda.textContent=hisobla((son/1000),piyodatez);
   velosiped.textContent=hisobla(son/1000,velosipedtez);
   mashina.textContent=hisobla(son/1000,mashinatez);
   samolyot.textContent=hisobla(son/1000,samalyottez);
   
  
 }
 else {
  piyoda.textContent=hisobla(son,piyodatez);
  velosiped.textContent=hisobla(son,velosipedtez);
  mashina.textContent=hisobla(son,mashinatez);
  samolyot.textContent=hisobla(son,samalyottez);
 }

});

