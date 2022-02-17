/** @format */

const login = (req, res) => {
    res.render('login')
}
const admin = (req, res) => {
    res.render('admin')
}
const loginPost = (req, res) => {
    console.log(req.body)
    const {username, password} = req.body
    console.log(username)
    if (username === 'admin' && password === 'admin') {
        req.session.user = username
        res.json('done')
    } else {
        res.json('error')
    }
    // write the code to check if sent data [username, password]
    // matches the following ['admin', 'admin']
    // if it matches res.json('done');
    // else res.json('error')
}

module.exports = {
    login,
    admin,
    loginPost,
}
