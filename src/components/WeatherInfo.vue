<template>
  <div class="weather-wrap" v-if="weather">
    <div class="location-box">
      <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
    </div>

    <div class="weather-box">
      <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
      <div class="weather">{{weather.weather[0].main}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WeatherInfo',
    props: {
      weather: Object || null
    }
  }
</script>

<style scoped>
.location-box .location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  margin: 30px 0px;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.15);
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
}
.weather-box .weather {
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(255, 255, 255, 0.25);
}
</style>