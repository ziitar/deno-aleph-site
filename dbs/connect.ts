
import { Database, MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';
import dbConfig from '../dbConfig.ts'
const connector = new MySQLConnector(dbConfig)

const db = new Database(connector, {debug: true});

export default db;