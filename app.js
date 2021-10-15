const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };

  res.json(blog);
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
