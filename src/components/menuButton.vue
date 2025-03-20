<template>
  <a class="text-xl rounded p-4 w-full h-full text-center cursor-pointer transition-all duration-200 group relative overflow-hidden hover:shadow text-white">
    <slot></slot>
    <div class="absolute top-[99%] group-hover:top-0 duration-150 transition-all left-0 bg-primary w-full h-full -z-10"></div>
  </a>
</template>

<script>
export default {
  name: "menuButton"
}
</script>

<style scoped>

</style>