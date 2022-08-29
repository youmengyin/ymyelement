import { NOOP } from "@vue/shared";
export const withInstall = (main :any, extra?: any) => {
	main.install = (app: any) => {
		for (const comp of [main, ...Object.values(extra ?? {})]) {
			app.component(comp.name, comp);
		}
	};
	if (extra) {
		for (const [key, comp] of Object.entries(extra)) {
			main[key] = comp;
		}
	}
	return main;
};

export const withNoopInstall = (component) => {
	component.install = () => {};
	return component;
};
