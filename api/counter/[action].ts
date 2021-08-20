import type { APIRequest } from 'aleph/types.ts'
import {Counter} from '../../dbs/index.ts'

export default async function handler(req: APIRequest) {

  const row  = await Counter.select('count').find(1);
  let count: number = row.count as number;
  switch (req.params['action']) {
    case 'increase':
      count++
      req.json({ count })
      break
    case 'decrease':
      count--
      req.json({ count })
      break
    default:
      req.status(400).json({
        error: 'UnknownAction',
        status: 400,
        message: `undefined action '${req.params['action']}'`
      })
      break
  }
  await Counter.where('user', 1).update('count', count)

}
