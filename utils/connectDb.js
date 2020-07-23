const { Mongoose } = require("mongoose");

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log('Using existing connection');
    return;
  }
  // use new database connection
  const db = await Mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;