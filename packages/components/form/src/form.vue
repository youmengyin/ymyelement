<template>
  <div class="qx-form">
    <slot />
  </div>
</template>

<script setup lang='ts'>
import {
	PropType,
	provide,
	reactive,
	ref,
	toRefs
} from 'vue';
import { FormItemContext, formContextKey } from "@ymy/tokens";
import {
	Rules
} from 'async-validator';
import { filterFields } from './util';
const props = defineProps({
	model: { type: Object, require: true },
	rules: { type: Object as PropType < Rules> }
});
const fields: FormItemContext[] = [];
provide(formContextKey,
	reactive({
		...toRefs(props)
	})
);
const items = ref<FormItemContext []>([]);

function validate(callback: (isValid: boolean) => void) {
	const tasks = items.value.map((item) => item.validate());
	Promise.all(tasks).then(() => {
		callback(true);
	}).catch(() => {
		callback(false);
	});
}
function scrollToField(prop: any) {
	const field = filterFields(fields, prop)[0];
	if (field) {
		field.$el?.scrollIntoView();
	}
}

defineExpose({
	validate,
	scrollToField
});
</script>
<script lang='ts'>
export default {
	name: 'QxForm'
};
</script>

<style scoped lang='scss'>
@import '../../../theme-chalk/src/mixins/mixin.scss';
@include b(form) {
	margin-top: 20px;
	box-sizing: border-box;
	width: 300px;
	flex-shrink: 0;
}
</style>
