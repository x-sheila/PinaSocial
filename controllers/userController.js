const  users = [];

exports.signup = async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
             message: "Username and password required"
            });
        }
        users.push({ username, password });
     res.status(201).json({ message: "User created successfully"});
    };

     exports.signin = async (req, res) => {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({
                    message:"Username and password required"
                });
            }


            res.status(200).json({
                message: "Login successful",
                token: "fake-jwt-token-123",
                username:username
            });
          };