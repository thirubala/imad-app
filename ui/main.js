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
              
              var counter = request.responseText;
              var span = document.getElementById('counter');
              span.innerHTML= comment.toString();
          }
      }
  };
  
  //making the request
  
  request.open('GET','http://thirubala3171.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

var userInput = document.getElementById('user_text');
var comment = userInput.value; 
var submit = document.getElementById('submit');
submit.onclick = function(){
    
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i =0;i < names.length; i++){
        list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('commentlist');
    ul.innerHTML = list;
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