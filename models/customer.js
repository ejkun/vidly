const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer',new mongoose.Schema({
    isGold: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20 
    }
}));

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(128).required(),
        phone: Joi.string().min(5).max(20).required(),
        isGold: Join.boolean()
    };

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer