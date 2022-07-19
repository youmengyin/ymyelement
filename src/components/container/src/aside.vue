<template>
  <header
    class="qx-aside"
    :style="{width}"
  >
    <slot />
  </header>
</template>
<script lang="ts">
export default {
	name: "QXAside"
};
</script>
<script setup lang='ts'>
interface Props{
  width: string;
}
withDefaults(defineProps<Props>(), {
	width: '100px'
});

</script>

<style lang="scss">
@import '../../styles/mixin.scss';

@include b(aside){
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
