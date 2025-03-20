<template>
  <div class="w-screen h-screen overflow-x-hidden flex flex-col relative">
    <div class="z-20 border-primary px-4 h-12 top-0 flex absolute items-center justify-between w-full backdrop-blur-xl">
      <div class="border-b border-primary h-full flex items-center justify-center">
        <p class="text-xl font-medium text-white px-4">Stan Broersma</p>
      </div>
      <div class="h-full space-x-4">
        <top-bar-button @click="this.$emit('changeLocation', {name: 'home'})">Home</top-bar-button>
        <top-bar-button @click="this.$emit('changeLocation', {name: 'about'})">About me</top-bar-button>
        <top-bar-button @click="this.$emit('changeLocation', {name: 'projects'})">Projects</top-bar-button>
        <top-bar-button @click="this.$emit('changeLocation', {name: 'contact'})">Contact</top-bar-button>
      </div>
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