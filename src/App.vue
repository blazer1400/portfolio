<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
import Ui from "@/components/ui.vue";
import {onMounted} from "vue";

const router = useRouter();

onMounted(() => {
  const top = document.getElementById('topLeftDiv');
  const bot = document.getElementById('botRightDiv');

  setTimeout(() => {
    top.classList.add('top-[-100%]');
    bot.classList.add('top-[100%]');

    top.classList.remove('top-[-50%]');
    bot.classList.remove('top-[50%]');
  }, 700);
});

function changeLocation(v) {
  const top = document.getElementById('topLeftDiv');
  const bot = document.getElementById('botRightDiv');

  top.classList.add('top-[-50%]');
  bot.classList.add('top-[50%]');

  top.classList.remove('top-[-100%]');
  bot.classList.remove('top-[100%]');

  setTimeout(() => {
    router.push(v);
    setTimeout(() => {
      top.classList.add('top-[-100%]');
      bot.classList.add('top-[100%]');

      top.classList.remove('top-[-50%]');
      bot.classList.remove('top-[50%]');
    }, 200);
  }, 500);
}
</script>


<template>
  <div class="relative w-screen min-h-screen overflow-x-hidden">
    <div class="fixed w-[100%] h-[100%] bg-primary top-[-50%] transition-all duration-500 p-8 flex items-end justify-center z-50" id="topLeftDiv">
      <p class="text-white text-2xl font-semibold">Portfolio</p>
    </div>
    <div class="fixed w-[100%] h-[100%] bg-primary top-[50%] transition-all duration-500 p-8 flex items-start justify-center z-50" id="botRightDiv">
      <p class="text-white text-2xl font-semibold">Stan Broersma</p>
    </div>
    <ui v-if="!this.$route.meta?.simple" @changeLocation="(v) => changeLocation(v)">
      <RouterView @changeLocation="(v) => changeLocation(v)" />
    </ui>
    <RouterView v-else @changeLocation="(v) => changeLocation(v)" />
  </div>
</template>

<style scoped>
</style>
