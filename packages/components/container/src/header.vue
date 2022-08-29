<template>
  <header
    class="qx-header"
    :style="{height}"
  >
    <slot />
  </header>
</template>
<script lang="ts">
export default {
	name: "QxHeader"
};
</script>
<script setup lang='ts'>
interface Props{
  height?: string;
}
withDefaults(defineProps<Props>(), {
	height: '60px'
});

</script>

<style lang="scss">
@import '../../../theme-chalk/src/mixins/mixin.scss';
@include b(header){
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
