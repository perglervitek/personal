<script setup>
    import SocialIcons from './SocialIcons.vue';
</script>
<template>
    <footer class="h-40 font-sans antialiased bg-white">
        <div class="w-10/12 mx-auto">
            <div class="flex items-center justify-between flex-wrap p-4">
                <div class="flex items-center flex-no-shrink mr-6">
                    <span class="font-semibold text-xl tracking-tigh text-black">Vít Pergler</span>
                </div>
                <div class="text-black text-xl font-semibold">
                    &#169; 2021
                </div>
            </div>
            <div class="flex items-center justify-between flex-wrap p-4">
                <div class="flex items-center flex-no-shrink mr-6">
                    <p class="text-black-400 mb-0">Do not hesitate to contact me about work or any other crazy stuff.
                    </p>
                </div>
                <social-icons></social-icons>
            </div>
        </div>
    </footer>
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