<template>

  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-[80%]">
      <div class="w-full gap-4 transition-all duration-500">
        <p class="text-3xl font-semibold text-gray-800 text-center">My name is Stan Broersma</p>
      </div>
      <div class="h-px w-full bg-primary transition-all duration-500 delay-300" :class="(size > 0 ? ' opacity-100' : ' opacity-0')" :style="'margin-top: ' + size + 'rem; margin-bottom: ' + size + 'rem'"></div>
      <div class="transition-all duration-500">

        <p class="transition-all duration-500 text-center text-2xl font-semibold text-gray-700" :class="size > 0 ? 'opacity-100' : 'opacity-0'">I'm a fullstack developer specialized in VueJS and Laravel.</p>

        <div class="h-20 flex items-center justify-center gap-12 transition-all duration-500 mt-20" :class="showMenu ? 'opacity-100' : 'opacity-0'">
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
      show: false,
      showMenu: false,
    }
  }
}
</script>

<style scoped>

</style>