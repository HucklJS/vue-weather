<template>
  <div id="app">
    <Preloader v-if="false" />
    <SearchBar
      v-else
      :current-input="currentInput"
      @change-current-input="changeCurrentInput"
      @find-weather="findWeather"
    />
  </div>
</template>

<script>
import Preloader from "./components/Preloader"
import SearchBar from "./components/SearchBar"

export default {
  name: 'App',
  components: {
    Preloader,
    SearchBar
  },
  data() {
    return {
      currentInput: 'Moscow',
      API_KEY: '1d55a69956adecf00c5bebb2a3c89b73'
    }
  },
  methods: {
    changeCurrentInput(newValue) {
      this.currentInput = newValue
    },
    async findWeather(city) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${this.API_KEY}&units=metric`)
      const data = await response.json()
      console.log(data)
    }
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
