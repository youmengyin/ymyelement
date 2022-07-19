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
	name: "QXHeader"
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

@include b(header){
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
