<template>
  <aside
    class="qx-aside"
    :style="{width}"
  >
    <slot />
  </aside>
</template>
<script lang="ts">
export default {
	name: "QxAside"
};
</script>
<script setup lang='ts'>
interface Props{
  width: string;
}
withDefaults(defineProps<Props>(), {
	width: '200px'
});

</script>

<style lang="scss">
@import '../../../theme-chalk/src/mixins/mixin.scss';
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
