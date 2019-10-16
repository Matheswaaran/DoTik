import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import Schema from "./schema";
import Users from "./users";
import Tasks from "./tasks";

const adapter = new SQLiteAdapter({
  dbName: 'DoTik',
  schema: Schema
});

const database = new Database({
  adapter,
  modelClasses: [Users, Tasks],
  actionsEnabled: true,
});

export { database };
