const mongoose = require('mongoose');
const { genSalt, hash } = require('bcryptjs');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

module.exports = model('User', userSchema);
