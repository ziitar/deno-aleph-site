import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class Counter extends Model{
  static table = 'counter';
  static fields = {
    user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    count: {
      type: DataTypes.INTEGER,
    }
  }
}

export default Counter