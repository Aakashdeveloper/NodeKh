const brcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../model/User");
const jwtExpireTime = 24*60*60;

exports.registerUser = (req,res) => {
    console.log(req.body)
    User.findOne({
        email:req.body.email
    }).then((user) => {
        console.log("user>>",user)
        if(user){
            return res.status(400).json({
                email:"Email already Registered"
            });
        }else{
            let hashpassword = brcypt.hashSync(req.body.password,8);
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:hashpassword,
                role:req.body.role
            });
            newUser.save().then((user) => {
                console.log("Resgistration successful");
                return res.json(user)
            })
        }
    })
}

exports.loginUser = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then((user) => {
        if(!user){
            return res.status(404).send({message:"User Not Found"})
        }
        let isMatch = brcypt.compareSync(password,user.password);
        if(isMatch){
            const payload = {
                    id:user.id,
                    name:user.name,
                    role:user.role
            };
            jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:jwtExpireTime},
                (err,token) => {
                    if(err) { console.log("Error While login")}
                    else{
                        console.log("token>> ",token)
                        res.json({
                            success:true,
                            token:`Bearer ${token}`
                    })
                }
            })     
        }else{
                return res.status(400).send({message:"Invalid Credentials"})
            }
    })
}
