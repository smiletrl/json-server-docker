module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    res.status(200).json({
      data: "ok",
    });
  } else {
    next();
  }
};
