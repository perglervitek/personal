<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
          <div class="flex items-center gap-4 end-sm:flex-grow justify-end" >
          <a v-for="(iconItem, index) in icons" :key="index" :href="iconItem.link" target="_blank" class="inline text-black text-2xl">
            <Icon :icon="iconItem.icon" class=""/>
          </a>
        </div>
</template>

<script>
export default {
    name: 'social-icons',
    data() {
        return{
            icons: [
                {
                    icon: 'mdi:github',
                    link: 'https://github.com/perglervitek/'
                },
                {
                    icon: 'mdi:linkedin',
                    link: 'https://www.linkedin.com/in/v%C3%ADt-pergler-618a15152/'
                },
                {
                    icon: 'mdi:facebook',
                    link: 'https://www.facebook.com/vit.pergler/'
                },
                {
                    icon: 'mdi:instagram',
                    link: 'https://www.instagram.com/vitek_pergler/'
                },
                {
                    icon: 'mdi:email',
                    link: 'mailto:perglervitek@gmail.com?subject=Job offer/'
                }
            ]
        }
    }
}
</script>