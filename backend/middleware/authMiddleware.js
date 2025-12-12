import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if(!token) return res.status(401).json({ message: 'jwt token not found' });
    try {
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: 'JWT secret is not set in environment variables' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch(error) {
        res.status(401).json({message: 'Not authorized, token failed'});
    }
}