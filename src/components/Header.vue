<script setup>
import SocialIcons from './SocialIcons.vue';
</script>
<template>
  <!-- <header class="relative bg-white h-24"> -->
  <!-- md:hidden
  <nav class="max-w-screen-2xl sm:max-w-7xl mx-auto h-full">
    <div class="-mr-2 -my-2 flex justify-between content-between items-center h-full">
    <a href="#" class="flex items-center">
      <img class="rounded-full h-10 w-auto sm:h-10" src="@/assets/me.jpg" alt="">
      <p class="mb-0 ml-8 hidden md:block">Vít Pergler</p>
    </a>
    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
      <span class="sr-only">Open menu</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</header> -->
  <header class="font-sans antialiased shadow-sm bg-white">
    <nav class="flex items-center justify-between flex-nowrap p-6">
      <div class="flex items-center flex-no-shrink mr-6">
        <img class="rounded-full h-10 w-auto sm:h-10" src="@/assets/me.jpg" alt="">

        <span class="hidden sm:block font-semibold text-xl tracking-tigh text-black ml-8">Vít Pergler</span>
      </div>
      <!-- <div class="block sm:hidden">
        <button @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->
      <!-- <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto items-center justify-end"> -->
        <!-- <div class="text-sm sm:flex-grow">
          <a href="#responsive-header"
            class="no-underline block sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
            Blog
          </a>
        </div> -->
      <!-- </div> -->
      <social-icons/>
    </nav>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    }
  }
</script>