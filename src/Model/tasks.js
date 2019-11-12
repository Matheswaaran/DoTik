import {Model} from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

class tasks extends Model {
  static table = 'tasks';

  @field('task_name') task_name;
  @field('task_desc') task_desc;
  @field('task_time') task_time;
  @field('task_remind') task_remind;

  @action async addTask(data) {
    return await this.collections.get('tasks').create(task => {
      task.task_name = data.task_name;
      task.task_desc = data.task_desc;
      task.task_time = data.task_time;
      task.task_remind = data.task_remind;
      task.remind_before = data.remind_before;
    });
  }
}

export default tasks;
