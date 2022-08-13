import DefaultTheme from 'vitepress/theme';
import { App } from 'vue';
// import * as QXUi from "@ymy/components";
// 自定义 CSS
// https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css
import './custom.css';

export default {
	...DefaultTheme,
	enhanceApp({ app } : { app : App}) {
		// app.use(QXUi as any)
		// register global components
		// app.component('MyGlobalComponent' /* ... */);
	}
};
