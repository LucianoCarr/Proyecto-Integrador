const db = require('../../database/models')
const checkMail = async (req,res)=>{
    const email = req.query.email
try {
    const user = await db.User.findOne({
        where : {
            email
        }
    })
    return res.status(200).json({
        ok:true,
        data : user ? true : false
    })
} catch (error) {
    return res.status(error.status || 500).json({
        ok: false,
        msg : error.message || 'Ups,hubo un error'
    })
}

    
    
}

const checkPassword = async (req,res)=>{
    const password = req.query.password
try {
    const user = await db.User.findOne({
        where : {
            password
        }
    })
    return res.status(200).json({
        ok:true,
        data : user ? true : false
    })
} catch (error) {
    return res.status(error.status || 500).json({
        ok: false,
        msg : error.message || 'Ups,hubo un error'
    })
}

    
    
}
module.exports = {
    checkMail,
    checkPassword 
}