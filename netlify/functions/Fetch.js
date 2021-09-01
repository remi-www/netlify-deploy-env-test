const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { endpoint } = event.queryStringParameters;
    console.log(context);
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoint}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res.data }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
