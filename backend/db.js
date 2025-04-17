import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB")).catch((error) => console.log("connection error", error));


const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstname: String,
    password: String,
  }
)

const User = mongoose.model('User', userSchema);

export default User;


