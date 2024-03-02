const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  try {
    
    // const token = req.headers.authorization.split(' ')[1];
    const token = req.headers['x-access-token']
    const decodedToken = jwt.verify(token, 'secret_this_should_be_longer');
    req.user = {
      userName: decodedToken.userName,
      password: decodedToken.password,
    };
    console.log(req.User);

    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};
