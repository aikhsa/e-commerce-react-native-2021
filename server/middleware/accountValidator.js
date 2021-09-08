const error400 = { 
    message: "Bad request"
}
const error422 = { 
    message: "Unprocessable Data"
}

const register = (req, res, next) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        res.status(422).json(error400)
    } else if (typeof name !== 'string' ||  typeof email !== 'string' || typeof password !== 'string' ) {
        res.status(422).json(error422)
    } else {
        
        const checkAt = email.includes('@')
        const checkDot = email.includes('.')

        if (!checkAt || checkDot) {
            res.status(422).json({
                message: "Email is not in a valid short!"
            })
        } else if (password.length < 6) {
            res.status(422).json({
                message: "Password is too short!"
            })
        } else {
            next()
        }
    }
}

const login = (req, res, next) => {
    const { email, password} = req.body
    if (!email || !password) {
        res.status(422).json(error400)
    } else if (typeof email !== 'string' || typeof password !== 'string' ) {
        res.status(422).json(error422)
    } else {
        next()
    }
}

const getOne = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).json(error400)
    } else if (typeof req.params.id !== "string") {
        req.status(422).json(error422)
    } else {
        next()
    }
    
}

const getAll = (req, res, next) => {
    
}


module.exports = {
    register,
    login,
    getOne,
    getAll
}