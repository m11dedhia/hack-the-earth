const { verify } = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
  const token = req.header('auth-token')
  if (!token){
    return res.status(404).send("access denied")
  }
  try {
    const verified= verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(404).send("Invalid token")
  }
}

module.exports = { verifyToken };