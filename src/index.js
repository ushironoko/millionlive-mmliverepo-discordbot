require('dotenv').config()
const getPlayResultJSON = require('./elasticsearchapi')
const postDiscord = require('./postdiscord')

async function main() {
  const res = await getPlayResultJSON()
  const returnCode = await postDiscord(res.hits.hits)
  return returnCode
}

main().then(msg => {
  console.log(msg)
})
