<template>

  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-[80%]">
      <div class="w-full gap-4 transition-all duration-500 relative border-b border-primary overflow-hidden text-white" :class="size > 0 ? 'h-32' : 'h-0'">
        <div class="h-max px-2">
          <p class="text-4xl font-bold">Stan Broersma</p>

          <p class="transition-all duration-500 text-2xl font-medium mt-6">Fullstack Developer specialized in VueJS and Laravel.</p>
        </div>
      </div>
      <div class="transition-all duration-500">

        <div class=" grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-12 transition-all duration-500 mt-20" :class="showMenu ? 'opacity-100' : 'opacity-0'">
          <menu-button @click="this.$emit('changeLocation', {name: 'about'})">More about me</menu-button>
          <menu-button @click="this.$emit('changeLocation', {name: 'projects'})">Projects</menu-button>
          <menu-button @click="this.$emit('changeLocation', {name: 'contact'})">Contact</menu-button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import MenuButton from "@/components/menuButton.vue";

export default {
  name: "Home",
  components: {MenuButton},
  mounted() {
    setTimeout(() => {
      this.size = 5
      setTimeout(() => {
        this.showMenu = true
      }, 900)
    }, 1400)
  },
  data() {
    return {
      size: 0,
      showMenu: false,
    }
  }
}
</script>

<style scoped>

</style>