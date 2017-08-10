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
              
              var names = ['cmnt1','cmnt2','cmnt3'];
              var list = '';
              for(var i =0;i < names.length; i++){
              list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('commentlist');
    ul.innerHTML = list();
          }
      }
  };
  
  //making the request
  
  request.open('GET','http://thirubala3171.imad.hasura-app.io/counter',true);
  request.send(null);
  
};


var submit = document.getElementById('submit');
submit.onclick = function(){
    //creating an API reqeust object
    var request = new XMLHttpRequest();
  
    //the change of state of the page load
    request.onreadystatechange = function(){
      
        //if the reqeust is comepleted
        if(request.readyState === XMLHttpRequest.DONE){
          //if request is successful
          if(request.status === 200){    
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i =0;i < names.length; i++){
                list += '<li>'+names[i]+'</li>';
            }
            var ul = document.getElementById('commentlist');
            ul.innerHTML = list;
        }
    }
    };
    
    var userInput = document.getElementById('user_text');
    var comment = userInput.value; 
    request.open('GET','http://thirubala3171.imad.hasura-app.io/submit-name?name='+name,true);
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