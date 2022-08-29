import mitt from "mitt";
import { FormItem } from "@ymy/components";
export type Events = {
  validate: undefined,
  addFormItem: FormItem
}
export const emitter = mitt<Events>();
