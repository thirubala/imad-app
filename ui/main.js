var button = document.getElementById('submit');

button.onclick = function(){
  
  //creating an API reqeust object
  var request = new XMLHttpRequest();
  
  //the change of state of the page load
  request.onreadystatechange = function(){
      
      //if the reqeust is comepleted
      if(request.readyState === XMLHttpRequest.DONE){
          //if request is successful
          if(request.status === 200){
              
              var comment = request.responseText;
              var span = document.getElementById('cmnt');
              span.innerHTML= comment.toString();
          }
      }
  };
  
  //making the request
  
  request.open('GET','http://thirubala3171.imad.hasura-app.io/counter',true);
  request.send(null);
  
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