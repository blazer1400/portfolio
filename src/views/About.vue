<template>
  <div class="w-screen h-[94%] overflow-hidden">
    <div class="w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
      <card class="flex justify-between" :style="show ? 'width: 500px' : 'width: 16rem'">
        <div class="p-8 space-y-4 whitespace-nowrap">
          <p class="text-2xl">Stan Broersma</p>
          <p class="flex justify-between gap-4">Age: <span class="text-primary font-medium">20</span></p>
          <p class="flex justify-between gap-4">Years of experience: <span class="text-primary font-medium">2+</span></p>
          <div class="flex justify-between gap-4">
            <p>Skills:</p>
            <div class="text-primary font-medium text-right">
              <p>VueJS</p>
              <p>Laravel</p>
              <p>TailwindCSS</p>
              <p>PHP</p>
              <p>MySQL</p>
              <p>Python</p>
            </div>
          </div>
        </div>
        <img src="@img/portrait.jpg" class="pointer-events-none absolute w-64 z-20 top-0 right-0" />
      </card>
      <div class="absolute left-1/2 transform -translate-x-1/2 bottom-10 cursor-pointer animate-bounce transition-all duration-300" :class="showArrow ? 'opacity-100' : 'opacity-0'">
        <i class="uil uil-angle-down text-4xl" @click="this.$refs.page2.scrollIntoView({block: 'end'})"/>
      </div>
    </div>
    <div class="w-screen h-screen bg-gray-50 flex items-center justify-center" ref="page2">
      <card class="w-[70rem] p-14">
        <p class="text-2xl font-bold text-primary">My name is Stan. I am 20 years old and i am currently in service as an fullstack developer at TBB Express.</p>
        <div class="space-y-10 mt-14 p-4 text-lg">
          <p>I started learning how to program when i was in secondary school. After school, i would follow tutorials online on how to make sites using html/css, and eventually, also with PHP and JavaScript. I enjoyed this so much, i decided to follow the Software Developer study at ROC van Flevoland.</p>
          <p>At ROC, i would learn to make more advanced sites, and follow an internship at COTIT. During my time at COTIT, i learned a lot about VueJS and Laravel. After my six-month internship, i got a job offer at TBB Express as an front-end developer and eventually, became a fullstack developer.</p>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "About",
  components: {Card},
  mounted() {
    setTimeout(() => {
      this.show = true
      setTimeout(() => {
        this.showArrow = true
      }, 1500)
    }, 1100)
  },
  data() {
    return {
      show: false,
      showArrow: false,
    }
  }
}
</script>

<style scoped>
div {
  scroll-behavior: smooth;
}

</style>