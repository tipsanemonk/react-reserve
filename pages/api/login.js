import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. check user exists
    const user = await User.findOne({ email }).select('+password');
    
    // 2. if not return error
    if (!user) {
      return res.status(404).send('No user exists with that email');
    }
  
    // 3. check if the user's password matches the one in db
    const passwordsMatch = await bcrypt.compare(password, user.password);

    // 4. if so, generate a token 
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d'});
       // 5. send that token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send('Password do not match');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error logging in user');
  }
}
