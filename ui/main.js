var button = document.getElementById('submit');
var comment = 0;

button.onclick = function(){
  
  comment = comment + 1;
  
  //displaying the comments
  var span = document.getElementById('cmnt');
  span.innerHTML= comment.toString();
};



/*console.log('Loaded!');

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
    setInterval(moveRight,10);
};*/