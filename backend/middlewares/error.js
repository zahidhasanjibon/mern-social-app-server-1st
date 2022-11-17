
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCodde || 500;
    err.message = err.message || 'internal server error';

    res.status(err.statusCode).json({
        success: false,
        error: err.message,
    });
};
