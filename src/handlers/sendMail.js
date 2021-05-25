async function sendMail(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello "}),
  };
}

export const handler = sendMail;
