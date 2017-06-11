const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let userScheme = mongoose.Schema({
    local : {
        fistName : String,
        lastName : String,
        email : String,
        password : String,
    },
    facebook : {
        id : String,
        token : String,
        email : String,
        name : String
    }
});
// Methods


// 1 => Generating Hash
userScheme.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// 2 => Checking if password is valid
userScheme.methods.validPassword = (password) => {
    return bcrypt.copareSync(password, this.local.password);
}

module.exports = mongoose.model("User", userScheme);