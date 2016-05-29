var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var settingSchema = new mongoose.Schema({
    name: String,
    value: mongoose.Schema.Types.Mixed,
    type: String,
    hasBeenModified: Number
});

module.exports = settingSchema;
