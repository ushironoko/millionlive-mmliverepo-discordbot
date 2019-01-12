import { SearchResponse } from "elasticsearch";
import getPlayResultJSON from './elasticsearchapi'
import postDiscord from './postdiscord'

async function main() {
  const res: SearchResponse<any> | undefined = await getPlayResultJSON()
  return (await postDiscord(res))
}

main().then(msg => console.log(msg))
