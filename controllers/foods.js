
const express = require('express');

const User = require('../models/user.js');


const ren = async (req, res) => {
    const user = await User.findById(req.params.userId);

    res.render('foods/index.ejs', { title: 'your foods', foods: user.foods })

}

const newFood = async (req, res) => {
    res.render('foods/new.ejs', { title: 'wlecome to the food page' })
}

const createFood = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);

        user.foods.push(req.body);
        await user.save();
        res.redirect(`/users/${req.params.userId}/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/foods');
    }
}

const show = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const food = user.foods.id(req.params.foodId);
        res.render('foods/show.ejs', { title: 'food details', food })

    } catch (error) {
        console.log(error);
        res.redirect('/foods');
    }


}

const deleteFood = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        user.foods.id(req.params.foodId).deleteOne();
        await user.save();
        res.redirect(`/users/${req.params.userId}/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/foods');
    }
}

const edit = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const food = user.foods.id(req.params.foodId);
        res.render('foods/edit.ejs', { title: 'edit food', food });
    } catch (error) {
        console.log(error);
        res.redirect('/foods');
    }
}

const updateFood = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const food = user.foods.id(req.params.foodId);
        food.set(req.body);
        await user.save();
        res.redirect(`/users/${req.params.userId}/foods`);

    }
    catch (error) {
        console.log(error);
        res.redirect('/foods');
    }
}





module.exports = {
    ren,
    newFood,
    createFood,
    show,
    deleteFood,
    edit,
    updateFood,
}