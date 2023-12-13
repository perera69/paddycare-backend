const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user.model');
const UserModel =require ('../model/user.model');

router.post('/registration', (req, res) => {
    const userData = req.body;

    const user = new User(userData);

    user.save()
        .then(() => {
            res.status(200).json({ message: 'Registration successful' });
        })
        .catch((error) => {
            if (error.name === 'ValidationError') {
                const errors = {};
                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                });
                return res.status(400).json({ errors });
            }

            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

//login router 
router.post('/login', async (req, res) => {
    const { nic, password } = req.body;

    try {
        const user = await UserModel.findOne({ nic });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Password matches, so login is successful
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
