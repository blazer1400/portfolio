<template>
  <button class="text-xl border-2 border-primary p-4 w-60 hover:bg-primary hover:text-white transition-all duration-200">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "menuButton"
}
</script>

<style scoped>

</style>