const express = require('express');
const User = require('../models/user.js');

const index = async (req, res) => {
    try {
        const users = await User.find();
        res.render('users/index.ejs', { title: 'Community', users });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

const show = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.render('users/show.ejs', { title: `${user.username}'s Pantry`, user });
    } catch (error) {
        console.log(error);
        res.redirect('/users');
    }
};

module.exports = {
    index,
    show
};
