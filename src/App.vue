<template>
  <div id="app">
    <SearchBar
      :current-input="currentInput"
      @change-current-input="changeCurrentInput"
      @find-weather="findWeather"
    />
    <div class="main">
      <Preloader v-if="isLoading" />
      <div v-else-if="isError" class="error">{{errorMsg}}</div>
      <WeatherInfo
        v-else
        :weather="weather"
      />
    </div>
  </div>
</template>

<script>
import Preloader from "./components/Preloader"
import SearchBar from "./components/SearchBar"
import WeatherInfo from "./components/WeatherInfo"
import getData from "./api"

export default {
  name: 'App',
  components: {
    WeatherInfo,
    Preloader,
    SearchBar
  },
  data() {
    return {
      currentInput: 'Moscow',
      isLoading: false,
      isError: false,
      errorMsg: '',
      weather: null
    }
  },
  methods: {
    changeCurrentInput(newValue) {
      this.currentInput = newValue
    },
    async findWeather(city) {
      if (city === '') {
        return this.setError('Please enter city name')
      }

      this.startLoad()

      const data = await getData(city)

      if (typeof data === 'string') {
        if (data === 'not found') {
          this.setError('Can\'t find this city')
        } else {
          this.setError('Unexpected error')
        }
      } else {
        setTimeout(() => {
          this.setWeather(data)
        }, 200)
      }
    },
    startLoad() {
      this.isLoading = true
      this.isError = false
      this.errorMsg = ''
      this.weather = null
    },
    setError(msg) {
      this.isLoading = false
      this.isError = true
      this.errorMsg = msg
    },
    setWeather(weather) {
      this.isLoading = false
      this.weather = weather
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
