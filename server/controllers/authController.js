const bcrypt = require('bcryptjs');


module.exports = {
    register: (req, res) => {
        const { username, password, email, name } = req.body;
        //Make sure we have all of the information
        if (!username || !password || !email || !name) {
            res.status(406).json({
                error: "Please fill in all input fields"
            });
        } else {
            //check if username is taken
            const db = req.app.get('db');
            db.checkForUser(username).then(users => {
                if (users.length > 0) {
                    res.status(401).json({ error: `Username already taken` });
                } else {
                    //Hash the password
                    bcrypt.hash(password, 10).then(hash => {
                        //put the user info in database
                        db.addUser(username, hash, email, name).then(() => {
                            //send a response
                            res.status(200).json({
                                username,
                                email,
                                name,
                                balance: 0
                            })

                        })

                    })
                }
            })
        }
    }
}