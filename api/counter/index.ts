import type { APIRequest } from 'aleph/types.ts'
import {Counter} from '../../dbs/index.ts'

export default async function handler(req: APIRequest) {

  // let rows = await Counter.select('count','user').where('user',1).get();
  // if(rows && rows.length === 0){
  //   await Counter.create([{user: 1, count: 0}]);
  //   rows = await Counter.select('count','user').where('user',1).get();
  // }
  // req.send(JSON.stringify({count: rows[0].count}))
  const row = await Counter.select('count').find(1);
  req.json(row)

}
