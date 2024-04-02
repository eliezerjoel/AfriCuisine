const User = require("../models/user");

const handleErrors = (error) =>{
    console.log(error.message, error.code)
    let errors = {email:'', password:''}

    if(error.code === 11000){
        errors.email = 'That email is already taken'
    }

    if (error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(error =>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

module.exports.signup_get = (req, res)=>{
    res.render('signup');
}

module.exports.login_get = (req, res)=>{
   
    res.render('login');
}

module.exports.login_post = async (req, res)=>{
    const {email, password} = req.body
    console.log(email)
    res.send('user login');
}
module.exports.signup_post = async (req, res)=>{
    const {email, password} = req.body
    
    try {
        const user = await User.create({email, password})
        res.status(200).json(user)
    } catch (error) {
        const errors = handleErrors(error)
        console.log(error)
        res.status(400).json(errors)
    }
}