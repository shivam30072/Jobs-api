const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauthenticated");

const authMiddleware = (req, res, next) => {
  // extracting token from  req:{headers: {authorization: Bearer token}}
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  // creating an array of the token string ["bearer", "token"]
  const token = authHeaders.split(" ")[1];

  try {
    // decoded the token
    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { name: user.name, id: user.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = authMiddleware;
