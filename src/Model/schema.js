import {appSchema, tableSchema} from '@nozbe/watermelondb';

const Schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'tasks',
      columns: [
        {name: 'task_name', type: 'string'},
        {name: 'task_desc', type: 'string'},
        {name: 'task_time', type: 'string'},
        {name: 'task_remind', type: 'boolean'},
        {name: 'remind_before', type: 'string'},
        {name: 'is_active', type: 'boolean'},
      ],
    }),
  ],
});

export default Schema;
