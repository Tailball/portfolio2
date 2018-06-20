const logger = (req, res, next) => {
    console.log(`${new Date().toTimeString()} >> ${req.method} > ${req.originalUrl}`);

    next();
}

module.exports = logger;