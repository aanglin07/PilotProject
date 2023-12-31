import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstname: {
    type: String,
    required: true
   },
   lastname: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true
   },

   avatar: {
      type: String
   },
   
   password: {
    type: String,
    required: true
   }
});

export default mongoose.model("User", userSchema);