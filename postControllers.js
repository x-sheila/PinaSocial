const posts = [];

 exports.createPost = async (req, res) => {
    try {
        const { content, username } = req.body;
    
        if (!content) {
     return res.status(400).json({ message: "Content is required"});

        }

    
    const newPost = { 
        id: posts.length + 1,
        username: username || "GuestUser",
        content: content,
        date: new Date().toISOString()
     };

    posts.push(newPost);
    res.status(201).json(newPost);
    } catch (error) {
    res.status(500).json({ message: "Server error"});
    }

};

exports.getPosts = async (req, res) => {
    try {
    res.status(200).json([...posts].reverse());
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};