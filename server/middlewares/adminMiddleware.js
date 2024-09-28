import jwt from 'jsonwebtoken'

export const verifyAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Token not found" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminID = decoded?.id;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ error: "Access Denied: Invalid token" });
    }
};

export default verifyAdmin;