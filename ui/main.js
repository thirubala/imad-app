console.log('Loaded!');

//Change the page text
var text=document.getElementById('main-text');
text.onclick = function(){
  text.innerHTML = 'How was my first trick?'; 
};