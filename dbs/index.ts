import Counter from './models/counter.ts'
import db from './connect.ts'


db.link([Counter]);
db.sync();


export {
  Counter,

}