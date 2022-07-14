<script setup>

import LayoutHeader from './components/Header.vue'
import LayoutFooter from './components/Footer.vue'
import { Icon } from '@iconify/vue';
</script>
<template>
  <div>
    <layout-header :class="!scrolled ? 'hidden' : 'fixed top-0 z-10 left-0 right-0'"></layout-header>
    <main>
      <router-view />
    </main>
    <layout-footer />

<div v-if="showBadge" class="fixed left-12 right-12 bottom-0 transform md:-translate-x-1/2 text-center py-4 lg:px-4 md:left-1/2">
  <div class="p-2 bg-indigo-100 rounded-full items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex uppercase px-2 py-1 text-xs font-bold mr-2">🚧</span>
    <span class="font-semibold mr-2 text-left flex-auto">This page is under construction!</span>
    <Icon @click="showBadge = false" class="cursor-pointer fill-current opacity-75 h-4 w-4" icon="mdi:close"></Icon>
  </div>
</div>

  </div>
</template>

<script>
export default{
  data(){
    return{
      scrolled: false,
      showBadge: true
    }
  },
  methods: {
    handleScroll(){
      this.scrolled = window.pageYOffset >= 87.97;

    }
  },
  beforeMount(){
    window.addEventListener('scroll', this.handleScroll);
    // return{handleScroll, scrolled}
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>