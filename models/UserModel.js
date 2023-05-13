import { Schema, model, models } from "mongoose";
import bcrypt from 'bcryptjs'

// Define the User schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select:false
    },
  },
  { timestamps: true }
);
userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
  next();
});
const User = models.User || model("User", userSchema);

export default User;
