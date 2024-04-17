<template>
  <div class="w-screen h-screen">
    <div class="w-full border-b border-primary h-[6%] shadow flex">
      <top-bar-button @click="this.$emit('changeLocation', {name: 'home'})">Home</top-bar-button>
      <top-bar-button @click="this.$emit('changeLocation', {name: 'about'})">About me</top-bar-button>
      <top-bar-button @click="this.$emit('changeLocation', {name: 'projects'})">Projects</top-bar-button>
      <top-bar-button @click="this.$emit('changeLocation', {name: 'contact'})">Contact</top-bar-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import TopBarButton from "@/components/topBarButton.vue";

export default {
  name: "ui",
  components: {TopBarButton}
}
</script>

<style scoped>

</style>