const jwt = require('jsonwebtoken');

module.exports.ensureToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.sendStatus(403);
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        return res.json({ auth: false, message: 'No auth!' });
      } else {
        let ui = decoded.role_id;
        if (ui != 1) {
          return res.sendStatus(403);
        }
        req.user = decoded;
        next();
      }
    });
  }
};
module.exports.userToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.sendStatus(401);
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
module.exports.TestToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'jwtSecret', (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
};
