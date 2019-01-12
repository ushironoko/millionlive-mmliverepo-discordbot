const request = require('request')

module.exports = async function postDiscord(res) {
  return new Promise(resolve => {
    try {
      let response = request.post(
        {
          uri: process.env.DISCORD_WEBHOOK_URL,
          headers: { 'Content-Type': 'application/json' },
          json: {
            username: "node",
            icon_emoji: ':ghost:',
            text: "node to send"
          }
        },
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(body)
          } else {
            console.log('error')
          }
        }
      )

      resolve(response)
    } catch (error) {
      console.log(error)
    }
  })
}
