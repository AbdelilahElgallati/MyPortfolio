const emailjs = require('@emailjs/nodejs');

exports.handler = async (event, context) => {
  try {
    const { to, subject, message } = JSON.parse(event.body);

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { to, subject, message },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};