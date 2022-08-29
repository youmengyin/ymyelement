import { createApp } from 'vue';
import App from './App.vue';
import QxContainer from './components/container';
import QxButton from './components/button';
import QxForm from './components/form';

const app = createApp(App);
app.config.globalProperties.$QXUI = {
	size: 'large'
};
app.use(QxContainer).use(QxButton).use(QxForm).mount('#app');
