<template>
<div>
    <Content v-if="htmlContent.code === 'success'" />
    <h1 class="error" v-else>manpage not found</h1>
</div>
</template>

<script>
import Content from './Content.vue'

export default {
    name: 'Viewer',
    components: {
        Content
    },
    data() {
        return {
        }
    },
    computed: {
        htmlContent() {
            return this.$store.state.htmlContent
        }
    }
}
</script>

<style scoped>
.error {
    width: 100%;
    background-color: brown;
    color: white;
    font-size: 40px;
    text-align: center;
}
</style>