module.exports = {
    multipleMongooseToObject : function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    },

    mongooToObject : function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}