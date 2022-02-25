const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingridients: {
        type: String, 
        required: true
    },
    recipe: {
        type: String,
        required: true
    }
}, { timestamps:true });


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

