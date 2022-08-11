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
import { key, FormItem } from '../type';
import {
	Rules
} from 'async-validator';
const props = defineProps({
	model: { type: Object, require: true },
	rules: { type: Object as PropType < Rules> }
});

provide(key,
	reactive({
		...toRefs(props)
	})
);
const items = ref<FormItem []>([]);

function validate(callback: (isValid: boolean) => void) {
	debugger;
	const tasks = items.value.map((item) => item.validate());
	Promise.all(tasks).then(() => {
		callback(true);
	}).catch(() => {
		callback(false);
	});
}

defineExpose({
	validate
});
</script>
<script lang='ts'>
export default {
	name: 'QXForm'
};
</script>

<style scoped lang='scss'>
    @import '../../styles/mixin.scss';
    @include b(form) {
        margin-top: 20px;
        box-sizing: border-box;
        width: 300px;
        flex-shrink: 0;
    }
</style>
