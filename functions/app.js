require("dotenv").config();

module.exports.handler = async (event) => {
  const userEmail = event.requestContext.authorizer.email;
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins (adjust as necessary)
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userEmail }),
  };

  return response;
};
