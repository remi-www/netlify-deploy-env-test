exports.handler = function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ baseUrl: `${process.env.REACT_APP_TEST_API}` })
  }
}