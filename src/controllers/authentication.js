const Usermodel = require("../models/authetication");
const bcrypt = require("bcrypt");

const getSignup = (req, res) => {
    res.render("signup");
};

const postSignup = async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    await Usermodel.create({
        UserName: username,
        Email: email,
        Password: password
    })

    res.redirect("/user/signin");
};


const getSignIn = (req, res) => {

    res.render("signin");
};

const postSignIn = async (req, res) => {

    const { email, password } = req.body;
    const User = await Usermodel.findOne({ Email: email })
    if (!User) {
        return res.status(400).render("signin", "Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, User.Password)
    if (!isMatch) {

        return res.status(400).render("signin", { error: 'Invalid Password' });
    }



    res.redirect('/');
};



module.exports = {
    getSignIn,
    postSignIn,
    getSignup,
    postSignup

};