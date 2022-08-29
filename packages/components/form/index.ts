import Form from './src/form.vue';
import FormItem from './src/form-item.vue';
import Input from './src/input.vue';
import { withInstall, withNoopInstall } from "@ymy/utils";
export * from './type';

export const QxForm = withInstall(Form, {
	FormItem,
	Input
});

export default QxForm;
export const QxInput = withNoopInstall(Input);
export const QXFormItem = withNoopInstall(FormItem);
