import { createApp } from 'vue';

import App from './src/App.vue';
import QxContainer from './src/components/container';
import QxButton from './src/components/button';
import QxForm from './src/components/form';

const app = createApp(App);
app.config.globalProperties.$QXUI = {
	size: 'large'
};
app.use(QxContainer).use(QxButton).use(QxForm).mount('#app');
