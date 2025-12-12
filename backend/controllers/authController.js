import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user) return res.status(404).json({message: 'User not found'});
        const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched) return res.status(401).json({message: 'Wrong password'});
        const payload = { userId: user._id, userRole: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        if(!process.env.JWT_SECRET) return res.status(500).json({message: 'JWT_SECRET is not configured'});
        return res.json({ success: true, token});
    } catch (error) {
        return res.status(500).json({message: 'Server error'});
    }
}