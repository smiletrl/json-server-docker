module.exports = (req, res, next) => {
  let url = req.url;
  if (socialrouter.hasOwnProperty(url)) {
    func = socialrouter[url];
    func(req, res, next);
  } else {
    next();
  }
};

const socialrouter = {
  "/facebook_oauth": (req, res, next) => {
    res.status(200).json({
      access_token: "facebook_xxxx",
    });
  },
  "/google_oauth": (req, res, next) => {
    body = req.body;
    res.status(200).json({
      access_token: "google_xxxx",
    });
  }
};
