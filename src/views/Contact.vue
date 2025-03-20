<template>
  <div class="flex flex-col items-center justify-center h-full w-full text-white">
    <div class="w-[60rem]">
      <div class="w-full">
        <p class="mt-4 text-lg">Feel free to contact me via any of these links!</p>
      </div>
      <div class="mt-4 w-full flex items-center justify-center gap-4">
        <a :href="item.href" v-for="item in contacts" target="_blank" class="mt-4 w-full flex flex-col items-center gap-4 text-lg p-4 hover:bg-primary hover:text-white rounded transition-all duration-200">
          <i :class="'text-6xl uil uil-' + item.icon" />
          <p>{{ item.label }}</p>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contacts: [
        {
          href: 'mailto:s.broersma@kpnplanet.nl',
          label: 'Email',
          icon: 'at'
        },
        {
          href: 'https://www.linkedin.com/in/stanbroersma/',
          label: 'LinkedIn',
          icon: 'linkedin'
        },
        {
          href: 'https://github.com/blazer1400',
          label: 'GitHub',
          icon: 'github'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>