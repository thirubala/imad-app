var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

//configuration details for the database
var config = {
  user : 'thirubala3171',
  database: 'thirubala3171',
  host: 'http://db.imad.hasura-app.io',
  port: '5432',
  password : process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
      title: 'Article One | Thiru',
      heading: 'Harry Potter',
      date: 'Aug 9,2017',
      content: '<p>This page will contain Harry Potter updates, my first British obsession.</p>'
},
    'article-two': {
      title: 'Article Two | Thiru',
      heading: 'Doctor Who',
      date: 'Aug 19,2017',
      content: '<p>This page will contain Doctor Who updates, my second British obsession.</p>'
},
    'article-three': {
      title: 'Article Three | Thiru',
      heading: 'Sherlock',
      date: 'Aug 29,2017',
      content: `<p>This page will contain Sherlock updates, my second British obsession.
                Actually maybe not obsession in this case, more like appreciation.</p>`
}
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate =`
    <html>
     <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div> 
                    <a href="/">Home</a>
                </div>
                <div>
                    <h2>${heading}</h2>
                </div>
                <div>
                   ${date.toString()}
                </div>
                <div>
                    ${content}
                </div>
            </div>
            <br>
        </body>
    </html>`; 
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){
   
   var name = req.query.name;
   
   names.push(name);
   
   res.send(JSON.stringify(names));
});

//creating connection request for db
var pool = new Pool(config);

 //articleName = articleOne/Two/Three through a built-in functionality of the API express included
app.get('articles/:articleName',function(req,res){
   
   pool.query("Select * from articles where title = $1",[ req.params.articleName],function(req,res){
      
      if(err){
          res.status(500).send(err.toString());
      } else{
          if(res.rows.length === 0){
              res.status(404).send('Oops, looks like this exist doesnt exist! Try a different article.');
          }else{
              var articleData = result.rows[0];
          }
      }
   });

    res.send(createTemplate(articles[articleData]));
});

app.get('/article-two',function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
    res.send(createTemplate(articleThree));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/letsgetstarted.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'letsgetstarted.gif'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));

});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
