<template>
  <div>
    <input
      :value="modelValue"
      class="qx-input--inner"
      @input="onInput"
    >
  </div>
</template>

<script setup lang="ts">
import { emitter } from '@ymy/utils';
defineProps<{
  modelValue: string
}>();
// update:modelValue必须采用小驼峰形式
const emit = defineEmits<{(e: "update:modelValue", value:string): void
}>();

function onInput(e: Event) {
	const input = e.target as HTMLInputElement;
	emit("update:modelValue", input.value);
	emitter.emit("validate");
}
</script>

<script lang="ts">
export default {
	name: 'QxInput'
};

</script>
<style scoped lang ='scss'>
@import '../../../theme-chalk/src/mixins/mixin.scss';
@include b(input){
    @include m(inner){
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
}
</style>
