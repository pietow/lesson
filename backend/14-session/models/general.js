const login = (req, res) => {
    res.render('login')
}

const aboutUs = (req, res) => {
    res.send('about us')
}
const loginPost = (req, res) => {
    // write the code to check if sent data [username, password]
    // matches the following ['admin', 'admin']
    // if it matches res.json('done');
    // else res.json('error')
}

module.exports = {
    login,
    aboutUs,
    loginPost
}