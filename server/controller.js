module.exports = {

    registerUser: (req, res) => {
       let {username, password, profile_pic} = req.body
       const db = req.app.get('db');
       db.register_user({username, password, profile_pic})
       .then(userzz => {
           res.status(200).send(userzz);
       })
       .catch(err => {
           console.log(err);
           res.status(500).send(err)
       })
    }, 

    loginUser: (req,res) => {
        let {username, password} = req.body
        const db = req.app.get('db');
        db.login_user({username, password})
        .then(userzz => {
            res.status(200).send(userzz);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    }
}