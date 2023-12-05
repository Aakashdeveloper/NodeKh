const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/UserSchema');
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

//list of all users
router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) throw err;
        res.send(user);
    });
});

// Register Users
router.post('/register',(req,res) => {
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    },(err,result) => {
        res.status(200).send('Register Successful')
    });
});

//login User
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'There is Problem while Login'});
        if(!user) return res.status(201).send({auth:false,token:'No User Found Register First'});
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.status(201).send({auth:false,token:'Invalid Password'});
            // generate token
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400});
            return res.status(200).send({auth:true,token:token})
        }
    })
});

//userInfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.status(201).send({auth:false,token:'No Token Provided'});
    jwt.verify(token,config.secret,(err,data) => {
        if(err) return res.status(500).send({auth:false,token:'Invalid Token'});
        User.findById(data.id,(err,user) => {
            if(err) return res.send({auth:false,token:'Erro While Fetching user'});
            res.send(user);
        })
    })
})


module.exports = router;