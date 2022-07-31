import { createApp } from 'vue';
import App from './App.vue';
import QXContainer from './components/container';
import QXButton from './components/button';
import QXForm from './components/form';

const app = createApp(App);
app.config.globalProperties.$QXUI = {
	size: 'large'
};
app.use(QXContainer).use(QXButton).use(QXForm).mount('#app');
