require("dotenv").config();

const { verifyToken } = require("@clerk/clerk-sdk-node");

const verifyUser = async (token) => {
  const verifiedUser = await verifyToken(token, {
    jwtKey: process.env.CLERK_JWT_KEY,
    authorizedParties: [
      "http://localhost:3001",
      "https://www.mandarino.io",
      "https://www.heyy.sh",
    ],
  });

  return verifiedUser;
};

module.exports = {
  verifyUser,
};
