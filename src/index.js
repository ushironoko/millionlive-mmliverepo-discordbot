require('dotenv').config()
const getPlayResultJSON = require('./elasticsearchapi')
const postDiscord = require('./postdiscord')

async function main() {
  const res = await getPlayResultJSON()
  const result = await postDiscord(res)
}

main()
