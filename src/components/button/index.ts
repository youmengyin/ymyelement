import { App } from 'vue';
import QXButton from './src/button.vue';

export default {
	install(app: App) {
		app.component(QXButton.name, QXButton);
	}
};
