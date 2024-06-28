const mongoose = require('mongoose');
//connect to db
module.exports.connect = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/MyProject');
        await mongoose.connect(`mongodb+srv://huybrox:Huyhuyhuy123.@cluster0.ojhkldh.mongodb.net/Myproject`)
        console.log('Connected to database')
    } catch (error) {
        console.log('Connected error')
    }
}
