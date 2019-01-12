const request = require('request')

module.exports = async function postDiscord(data) {
  const postData = data.hits.hits
  let res = ''

  await Promise.all(
    postData.map(async x => {
      const msg = await request.post(
        {
          uri: process.env.DISCORD_WEBHOOK_URL,
          headers: { 'Content-Type': 'application/json' },
          json: {
            username: x._id,
            content: x._source.text
          }
        },
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            return body
          } else {
            return error
          }
        }
      )
      console.log(msg)
    })
  ).catch(x => console.log(x))
  return 'complete'
}
