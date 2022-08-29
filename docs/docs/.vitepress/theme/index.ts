import DefaultTheme from 'vitepress/theme';
import { App } from 'vue';
import * as QxUI from "@ymy/components";
import "@ymy/theme-chalk";
import { withInstall } from '@ymy/utils';
// 自定义 CSS
// https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css
import './custom.css';

export default {
	...DefaultTheme,
	enhanceApp({ app } : { app : App}) {
		for (const comp of [...Object.values(QxUI ?? {})]) {
			app.component(comp.name, comp);
		}
		app.use(QxUI as any);
		// register global components
		// app.component('MyGlobalComponent' /* ... */);
	}
};
