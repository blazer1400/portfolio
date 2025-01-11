<template>

  <div class="relative m-16">
    <button @click="this.$emit('changeLocation', {name: 'projects'})" class="absolute -top-4 -left-4 bg-white border border-primary rounded px-3 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
      <i class="uil uil-angle-left-b" />
      Back
    </button>


    <card class="p-8 max-w-[800px] mx-auto">

      <div class="flex items-end justify-between border-b pb-8">
        <p class="text-3xl font-bold">{{ project.name }}</p>
        <img alt="logo" :src="source(project.img)" class="max-w-40 max-h-40 rounded" />
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
  },
  methods: {
    source(img) {
      return 'data:image/png;base64,' + img
    }
  }
}
</script>

<style scoped>

</style>