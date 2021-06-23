module.exports = {
    // Khi co' nhieu`
    mongoosesToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    // Khi co 1
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
