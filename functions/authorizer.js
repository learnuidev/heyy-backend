const { verifyUser } = require("./clerk/verify-user");

exports.handler = async (event) => {
  const token = event.authorizationToken;

  if (!token || !token.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }

  const apiKey = token.split(" ")[1];

  const credentials = await verifyUser(apiKey);

  if (credentials) {
    return generatePolicy(event.methodArn, credentials);
  } else {
    throw new Error("Unauthorized");
  }
};

function generatePolicy(resource, customContext) {
  return {
    principalId: "user",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Allow",
          Resource: resource,
        },
      ],
    },

    context: {
      email: customContext?.email,
    },
  };
}
