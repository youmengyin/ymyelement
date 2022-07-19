<template>
  <header
    class="qx-footer"
    :style="{height}"
  >
    <slot />
  </header>
</template>
<script lang="ts">
export default {
	name: "QXFooter"
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
@import '../../styles/mixin.scss';

@include b(footer){
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
