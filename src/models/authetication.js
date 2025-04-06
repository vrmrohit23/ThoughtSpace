const bcrypt = require('bcrypt');  
const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true

    },
    ProfileImage:{
        type:String,
        default:"../public/images/user avatar.png"
    },
    Gender:{
        type:String,
        enum:["Male","Female","Other"],
        default:"Male",
        required:true
    },
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User"
    }
},
{timestamps:true}
);

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('Password')) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(user.Password, 16);
        user.Password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});
    


const User = model('User',userSchema);
module.exports = User;