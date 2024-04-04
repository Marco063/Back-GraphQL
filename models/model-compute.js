const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaCompute = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    mark: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model("compute", SchemaCompute);
