<template>
  <header
    class="qx-main"
  >
    <slot />
  </header>
</template>
<script lang="ts">
export default {
	name: "QXMain"
};
</script>
<script setup lang='ts'>
</script>

<style lang="scss">
@import '../../styles/mixin.scss';

@include b(main){
  display: block;
  flex-basis: auto;
  padding: $--main-padding;
  box-sizing: border-box;
  overflow: auto;
}
</style>
