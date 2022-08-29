<template>
  <main
    class="qx-main"
  >
    <slot />
  </main>
</template>
<script lang="ts">
export default {
	name: "QxMain"
};
</script>
<script setup lang='ts'>
</script>

<style lang="scss">
@import './../../../theme-chalk/src/mixins/mixin.scss';
@include b(main){
  display: block;
  flex: 1;
  flex-basis: auto;
  padding: $--main-padding;
  box-sizing: border-box;
  overflow: auto;
}
</style>
