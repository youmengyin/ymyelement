import Button from './button.vue';
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
describe('按钮测试', () => {
	test('显示文本', () => {
		const content = '测试按钮文本';
		const wrapper = mount(Button, {
			slots: {
				default: content
			}
		});
		expect(wrapper.text()).toContain(content);
	});

	test('通过size属性控制大小', () => {
		const size = 'small';
		const wrapper = mount(Button, {
			props: {
				size
			}
		});
		// size内部通过class控制
		expect(wrapper.classes()).toContain(`qx-button--${size}`);
	});
	test('全局设置按钮默认大小', () => {
		const size = 'mini';
		const wrapper = mount(Button, {
			global: {
				config: {
					globalProperties: {
						$QXUI: {
							size
						}
					}
				}
			}
		});

		expect(wrapper.classes()).toContain(`qx-button--${size}`);
	});

	test('按钮主题 ', () => {
		const type = 'success';
		const wrapper = mount(Button, {
			props: {
				type
			}
		});
		expect(wrapper.classes()).toContain(`qx-button--${type}`);
	});
});
