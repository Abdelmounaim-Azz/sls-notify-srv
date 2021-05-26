import AWS from "aws-sdk";

const ses = new AWS.SES({region: "eu-west-1"});

async function sendMail(event, context) {
  const record = event.Records[0];
  const email = JSON.parse(record.body);
  const {subject, body, recipient} = email;

  const params = {
    Source: "abdelmounaim.azziza@outlook.fr",
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Data: body,
        },
      },
      Subject: {
        Data: subject,
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
