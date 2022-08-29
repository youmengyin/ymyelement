<template>
  <footer
    class="qx-footer"
    :style="{height}"
  >
    <slot />
  </footer>
</template>
<script lang="ts">
export default {
	name: "QxFooter"
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
@include b(footer){
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
