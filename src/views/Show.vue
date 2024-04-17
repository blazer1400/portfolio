<template>

  <div class="relative m-16">
    <button @click="this.$emit('changeLocation', {name: 'projects'})" class="absolute -top-4 -left-4 bg-gray-100 rounded p-3 transition-all duration-300 hover:bg-primary hover:text-white">
      <i class="uil uil-angle-left-b" />
      Back
    </button>


    <card class="p-8 max-w-[800px] mx-auto">

      <div class="flex items-end justify-between border-b pb-8">
        <p class="text-3xl font-medium">{{ project.name }}</p>
        <img :src="'http://localhost:5173/src/assets/img/projects/' + project.img" class="max-w-40 max-h-40 rounded" />
      </div>

      <div class="mt-8">
        <p class="text-lg">{{ project.description }}</p>
      </div>

      <div class="mt-8 pt-8 border-t" v-if="project.url">
        <a target="_blank" :href="project.url" class="text-primary underline-primary hover:underline">{{ project.url }}</a>
      </div>

    </card>
  </div>

</template>

<script>
import projects from "@/assets/projects.json";
import Card from "@/components/card.vue";

export default {
  name: "Show",
  components: {Card},
  setup() {
    const p = projects
    return {
      projects: p
    }
  },
  data() {
    return {
      project: this.projects.find(item => item.id == this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>