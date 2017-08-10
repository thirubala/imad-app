var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
                   ${date}
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

app.get('/:articleName',function(req,res){
    //articleName = articleOne/Two/Three through a built-in functionality of the API express included
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
