<template>
  <div id="app">
    <Searcher/>
    <Viewer/>
  </div>
</template>

<script>
import Searcher from './components/Searcher.vue'
import Viewer from './components/Viewer.vue'

export default {
  name: 'App',
  components: {
    Searcher,
    Viewer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
