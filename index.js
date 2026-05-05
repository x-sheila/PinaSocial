const express = require('express');
const path = require('path'); 
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/signin.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/signup.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/feed.html'));
});



const PORT = 5000;
app.listen(PORT, ()  => { 
    console.log(`Server is running on port ${PORT}`);
});






