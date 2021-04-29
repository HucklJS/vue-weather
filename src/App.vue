<template>
  <div id="app">
    <MyCities
      :my-cities-list="myCitiesList"
      @find-weather="findWeather"
      @remove-city="removeCity"
      @find-weather-in-current-city="findWeatherInCurrentCity"
    />
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
        @toggle-city="toggleCity"
        :is-liked="!!myCitiesList.find(c => c.name === weather.name)"
      />
    </div>
  </div>
</template>

<script>
import Preloader from "./components/Preloader"
import SearchBar from "./components/SearchBar"
import WeatherInfo from "./components/WeatherInfo"
import MyCities from "./components/MyCities"
import getData from "./api"

export default {
  name: 'App',
  components: {
    MyCities,
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
      weather: null,
      myCitiesList: []
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
    findWeatherInCurrentCity() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async (position) => {
          const data = await getData(null, position)

          if (typeof data === 'string') {
            if (data === 'not found') {
              this.setError('Can\'t find this position')
            } else {
              this.setError('Unexpected error')
            }
          } else {
            setTimeout(() => {
              console.log(data)
              this.setWeather(data)
            }, 200)
          }
        })
      } else{
        alert("Ops! Something went wrong try reloading the page.")
      }
    },
    toggleCity(name, country) {
      const index = this.myCitiesList.findIndex(
        city => city.name.toLowerCase() === name.toLowerCase()
      )
      if (index === -1) {
        this.myCitiesList.push({
          name,
          country
        })
      } else {
        this.myCitiesList.splice(index, 1)
      }
    },
    removeCity(name) {
      this.toggleCity(name)
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
