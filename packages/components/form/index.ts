import { App } from "vue";
import QXForm from './src/form.vue';
import QXFormItem from './src/form-item.vue';
import QXInput from './src/input.vue';

export default {
	install(app: App) {
		app.component(QXForm.name, QXForm);
		app.component(QXFormItem.name, QXFormItem);
		app.component(QXInput.name, QXInput);
	}
};
