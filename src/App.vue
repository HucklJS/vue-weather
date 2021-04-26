<template>
  <div id="app">
    <Preloader v-if="true" />
  </div>
</template>

<script>
import Preloader from "./components/Preloader"

export default {
  name: 'App',
  components: {
    Preloader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-color: #f6f6f6;
}
</style>
