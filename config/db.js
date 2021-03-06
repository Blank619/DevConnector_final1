const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
      await mongoose.connect(db, {
          useNewUrlParser:true,
          useCreateIndex:true,
          useUnifiedTopology: true
      })  
      console.log('MOngo db connected');
    }
    catch(err){
        console.log(err);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;