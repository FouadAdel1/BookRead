const jwt = require("jsonwebtoken");
// var decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo) // bar

const checkUserandAdminAuth = (req, res, next) => {
  try {
    let token = req.get("authorization").split(" ")[1];
    let data = jwt.verify(token, process.env.SECRET_KEY);
    if (data.role == "admin" || data.role == "user") {
      req.role = data.role;
      req.id = data.id;
      next();
    }
  } catch (error) {
    error = new Error("your not Authintecation you must login ");
    error.status = 401;
    next(error);
  }
};

const checkAdminAuth = (req, res, next) => {
  try {
    if (req.role === "admin") {
      next();
    } else {
      throw Error("your not Authorized ");
    }
  } catch (error) {
    error.status = 401;
    next(error);
  }
};

module.exports = {
  checkUserandAdminAuth,
  checkAdminAuth,
};
