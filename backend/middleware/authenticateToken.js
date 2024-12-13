const jwt = require ('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || '@8Jm12s$p3ruIpl';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization; //This is expecting 
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; //Attach user data to request object
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
    }
};

module.exports = authenticateToken;