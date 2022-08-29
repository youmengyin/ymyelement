<template>
  <div class="qx-form-item">
    <label v-if="label">{{ label }}</label>
    <slot />
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang='ts'>
import Schema from 'async-validator';
import { inject, onMounted, ref } from 'vue';
import { FormItemContext, formContextKey } from "@ymy/tokens";
import { emitter } from '@ymy/utils';

interface Props {
  label?: string,
  prop?: string
}
const props = withDefaults(defineProps<Props>(), {
	label: '',
	prop: ''
});
const error = ref("");
const formData = inject(formContextKey);

onMounted(() => {
	if (props.prop) {
		emitter.on('validate', () => {
			validate();
		});
		emitter.emit('addFormItem', o);
	}
});

function validate() {
	if (formData?.rules === undefined) {
		return Promise.resolve({ result: true });
	}
	const rules = formData.rules[props.prop];
	const values = formData.model[props.prop];
	const schema = new Schema({ [props.prop]: rules });
	return schema.validate({ [props.prop]: values }).then((data) => {
		error.value = '';
	}).catch(({ errors, fields }) => {
		if (errors) {
			error.value = errors[0].message || "校验错误";
		} else {
			error.value = '';
		}
	});
}

const o:FormItemContext = {
	validate
};

defineExpose(o);
</script>
<script lang='ts'>
export default {
	name: 'QxFormItem'
};

</script>
<style scoped lang ='scss'>
@import '../../../theme-chalk/src/mixins/mixin.scss';
@include b(form-item){
  margin-bottom: 22px;
  label{
    line-height: 1.2;
    margin-bottom: 5px;
    display: inline-block;
  }
  & .qx-form-item{
    margin-bottom: 0;
  }
}
.error{
  color: red;
}
</style>
