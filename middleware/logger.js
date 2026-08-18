const logger = (req, res, next) => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(`[${req.method}] ${req.originalUrl} - ${time}`);

  next();
};

module.exports = logger;