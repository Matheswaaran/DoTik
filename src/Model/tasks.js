import { Model } from "@nozbe/watermelondb";
import { field, date } from '@nozbe/watermelondb/decorators'

class tasks extends Model {
  static table = "tasks";

  @field('task_name') task_name;
  @field('task_desc') task_desc;
  @date('task_date') task_date;
  @field('task_time') task_time;
  @field('task_remind') task_remind;
}

export default tasks;
