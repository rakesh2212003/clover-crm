export const jsonMiddleware = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Invalid JSON payload:', err.message);
        res.status(400).json({ error: 'Invalid Data' });
        next(err);
    }
}

export default jsonMiddleware;