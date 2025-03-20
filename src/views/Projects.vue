<template>
  <div class="m-16">
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
      <card v-for="(project, index) in projects" @click="this.$emit('changeLocation', {name: 'show', params: {id: project.id}})"
            class="group cursor-pointer w-full transition-all duration-200 h-40 flex items-center justify-start"
            :class="(show ? ' opacity-100' : ' opacity-0')" :style="'transition-delay: ' + (index * 100) + 'ms'">
        <img :src="source(project.img)" class="max-w-40 h-max max-h-40" />
        <p class="font-semibold group-hover:underline p-4">{{ project.name }}</p>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";
import projects from "@/assets/projects.json"

export default {
  name: "Projects",
  setup() {
    return {
      projects
    }
  },
  components: {Card},
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 500)
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    source(img) {
      return './src/assets/img/projects/' + img
    }
  }
}
</script>

<style scoped>

</style>