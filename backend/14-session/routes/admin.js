/** @format */

const adminHome = (req, res) => {
    console.log(req.session)
    if (req.session.user) {
        res.render('admin')
    } else {
        /* res.redirect('/login') */
        res.render('admin')
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.redirect('/login')
}

module.exports = {
    adminHome,
    logout,
}
