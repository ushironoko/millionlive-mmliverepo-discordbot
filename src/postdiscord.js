const request = require('request')

module.exports = async function postDiscord(data) {
  const postData = data.hits.hits
  let res = ''
  res = await request.post({
    uri: process.env.DISCORD_WEBHOOK_URL,
    headers: { 'Content-Type': 'application/json' },
    json: {
      username: postData[0]._id,
      content: postData[0]._source.text
    }
  }), function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return body
    } else {
      return error
    }
  }
    return res
}
