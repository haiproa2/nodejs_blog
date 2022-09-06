const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_blog');
        console.log('[Console log] connect mongoDb successfully!!!');
    } catch (error) {
        console.log('[Console log] connect mongoDb failure.');
    }
}

module.exports = { connect };