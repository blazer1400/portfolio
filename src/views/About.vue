<template>
  <div class="w-screen min-h-screen">
    <div class="w-full h-screen flex items-center justify-center overflow-hidden relative">

      <div class="flex justify-center gap-16">
        <div class="w-1/2 overflow-hidden text-white">
          <p class="text-2xl border-b py-2 font-medium border-primary w-full px-4">Stan Broersma</p>

          <div class="px-4 mt-4 text-lg">
            <p>My name is Stan, i am 21 years old. I  currently have over 2 years experience in creating optimizing and sustaining ERP-systems. I followed the Software Developer study at ROC van Flevoland and am currently in service at TBB Express as a Fullstack Developer.</p>
          </div>

        </div>

        <div class="w-60 relative">
          <img src="@img/portrait.jpg" class="w-full h-full object-cover rounded shadow" />
          <div class="w-full h-full bg-primary/50 top-2 left-2 absolute -z-10 rounded"></div>
        </div>
      </div>

      <div :class="cls" class="absolute tranlate-x-1/2 left-1/2 bottom-4 cursor-pointer text-center text-white group" @click="scrollToView('skills')">
        <span class="block text-sm font-medium duration-100 transition-all">Skills</span>
        <i class="uil uil-angle-down text-2xl block -mt-1 duration-100 transition-all" />
      </div>

    </div>
    <div class="w-screen h-screen pt-24 px-24 text-white flex flex-col pb-20" ref="skills">

      <p class="text-2xl border-b py-2 font-medium border-primary w-full px-4">Skills</p>

      <div class="w-full gap-12 mt-12 px-4 flex flex-col justify-between h-full">
        <div v-for="(percentage, skill, index) in skills" ref="animatedElement" class="h-10 w-0 rounded-full relative transition-all duration-500" :class="'delay-[' + (200 + ((index+1) * 100)) + 'ms]'">
          <div class="h-10 rounded-full bg-gradient-to-r to-primary from-rose-500 shadow absolute -top-0.5 -left-0.5" :style="'width: ' + percentage + '%'"></div>
          <span class="absolute left-4 font-medium text-white text-xs top-1/2 -translate-y-1/2">
            {{ skill }}
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "About",
  components: {Card},
  mounted() {

    this.observeElement()

    setTimeout(() => {
      this.cls = 'animate-bounce'
    }, 3000)
  },
  data() {
    return {
      cls: '',
      skills: {
        'VueJS': 98,
        'Laravel': 95,
        'TailwindCSS': 90,
        'MySQL': 85,
        'Python': 60,
        'C#': 55,
      }
    }
  },
  methods: {
    scrollToView(id) {
      this.$refs[id].scrollIntoView({behavior: 'smooth'})
      this.cls = ''
    },
    observeElement() {
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.$refs.animatedElement.forEach(el => {
                  el.classList.add("w-full")
                  el.classList.remove("w-0");

                })
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
      );

      observer.observe(this.$refs.skills);
    },
  }
}
</script>

<style scoped>
div {
  scroll-behavior: smooth;
}

</style>