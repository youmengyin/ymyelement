import QXContainer from './src/container.vue';
import QXAside from './src/aside.vue';
import QXFooter from './src/footer.vue';
import QXHeader from './src/header.vue';
import QXMain from './src/main.vue';
import { App } from 'vue';

export default {
	install(app: App) {
		app.component('QXContainer', QXContainer)
			.component('QXHeader', QXHeader)
			.component('QXFooter', QXFooter)
			.component('QXAside', QXAside)
			.component('QXMain', QXMain);
	}
};
