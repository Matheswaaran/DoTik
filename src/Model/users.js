import { Model } from "@nozbe/watermelondb";
import { field } from '@nozbe/watermelondb/decorators'

class users extends Model {
  static table = "users";

  @field('name') name
}

export default users;
