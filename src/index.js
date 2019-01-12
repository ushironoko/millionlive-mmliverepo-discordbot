require('dotenv').config()
const getPlayResultJSON = require('./elasticsearchapi')
const postDiscord = require('./postdiscord')

async function main() {
  const res = await getPlayResultJSON()
  return (result = await postDiscord(res))
}

main().then(msg => console.log(msg))
