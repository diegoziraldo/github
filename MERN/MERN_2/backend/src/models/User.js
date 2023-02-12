const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unquique: true
    },
},{
    timestamps: true
});

module.exports = model('User', userSchema);

