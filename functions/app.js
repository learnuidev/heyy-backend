// import middy from "@middy/core";
// import cors from "@middy/http-cors";

module.exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins (adjust as necessary)
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello world",
    }),
  };

  return response;
};
