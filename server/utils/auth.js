const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = " ";

module.exports = {
  signToken: function ({ dungeonMaster, email, _id }) {
    const payload = { dungeonMaster, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if no token, return request object as is
    if (!token) {
      return req;
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.dungeonMaster = data;
    } catch {
      console.log("Invalid token");
    }

    // return updated request object
    return req;
  },
};
