import AWS from "aws-sdk";

const ses = new AWS.SES({region: "eu-west-1"});

async function sendMail(event, context) {
  const params = {
    Source: "abdelmounaim.azziza@outlook.fr",
    Destination: {
      ToAddresses: ["azz.sahafrica@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "test email",
        },
      },
      Subject: {
        Data: "test email",
      },
    },
  };

  try {
    const res = await ses.sendEmail(params).promise();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
