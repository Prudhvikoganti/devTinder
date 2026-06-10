const adminAuth = (req, res, next) => {
    console.log('Admin middleware')
    const token = 'xyz'
    const isAdmin = token === 'xyz'
    if(isAdmin) {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

const userAuth = (req, res, next) => {
    console.log('User middleware')
    const token = 'xyz'
    const isUser = token === 'xyz'
    if(isUser) {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = {
    adminAuth,
    userAuth
}