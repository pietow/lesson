
const login = (req, res) => {
    res.render('login')
}
const admin = (req, res) => {
    res.render('admin')
}
const loginPost = (req, res) => {
    console.log(req.body)
    // write the code to check if sent data [username, password]
    // matches the following ['admin', 'admin']
    // if it matches res.json('done');
    // else res.json('error')
    res.send({result:req.body})
}

module.exports = {
    login,
    admin,
    loginPost
}
