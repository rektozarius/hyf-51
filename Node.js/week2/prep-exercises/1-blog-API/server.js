const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Blog Api');
});

app.get('/blogs', (req, res) => {
  const files = fs.readdirSync('./blogs');
  const blogs = [];

  files.forEach((file) => {
    blogs.push({title:file});
  });

  res.send(blogs);
});

app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  
  if (fs.existsSync(`./blogs/${title}`)) {
    const post = fs.readFileSync(`./blogs/${title}`, { encoding: 'utf8', flag: 'r' });
    res.send(post);
  }
  else {
    res.end('This post does not exist!');
  }
});

app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  fs.writeFileSync(`./blogs/${title}`, content);
  res.end('ok');
});

app.put('/blogs/:title', (req, res) => {
  const title = req.params.title;
  const content = req.body.content;

  if ( (fs.existsSync(`./blogs/${title}`)) && (content) ) {
    fs.writeFileSync(`./blogs/${title}`, content);
    res.end('ok');
  }
  else {
    res.end('This post does not exist!');
  }
});

app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;

  if (fs.existsSync(`./blogs/${title}`)) {
    fs.unlinkSync(`./blogs/${title}`);
    res.end('ok');
  } else {
    res.end('This post does not exist!');
  }
});
 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});