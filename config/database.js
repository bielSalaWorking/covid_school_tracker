const mongoose = require('mongoose');
require('dotenv').config();

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

const runConnection = async () => {
  try {
    
      await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r7bpq.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, connectionOptions);
      console.log('connection correct');
  }catch (err) {
      console.log(err);
  }

}

module.exports = runConnection;