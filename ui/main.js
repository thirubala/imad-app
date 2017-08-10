console.log('Loaded!');

//Change the page text
var text=document.getElementById('main-text');
text.onclick = function(){
  text.innerHTML = 'How was my first trick?'; 
};

//Move the image across the screen
var img=document.getElementById('gif');
var marginLeft = 0;
//a user defined function to move the object by altering the left margin
function moveRight(){
 marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';
 
}

img.onclick = function(){
    setInterval(moveRight,50);
};