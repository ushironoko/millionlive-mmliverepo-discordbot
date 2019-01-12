import { SearchResponse } from "elasticsearch";
import request  from "request"
import { DISCORD_WEBHOOK_URL} from './config'

export default async function postDiscord(data: SearchResponse<any> | undefined) {
  if (typeof data === "undefined") {
    throw new Error('data is undefined')
  } else {
    await Promise.all(
      data.hits.hits.map(async x => {
        const url: string = String(DISCORD_WEBHOOK_URL)
        const json: {} = {username:x._id, content: x._source.text}
        const options: {} = { 'Content-Type': 'application/json' , json}

        const msg = await request.post(
          url,
          options,
          function(error:any, response: request.RequestResponse, body: any):request.RequestCallback  {
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

}
