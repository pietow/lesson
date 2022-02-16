const login = (req, res) => {
    res.render('login')
}

const aboutUs = (req, res) => {
    res.send('about us')
}


module.exports = {
    login,
    aboutUs
}