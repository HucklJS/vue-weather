<template>
  <div class="weather-wrap" v-if="weather">
    <div class="location-box">
      <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
      <button class="heart"
              @click="$emit('toggle-city', weather.name, weather.sys.country)"
              :class="{'is-liked': isLiked}"
              aria-label="Add to liked">
      </button>
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
      weather: Object || null,
      isLiked: Boolean
    }
  }
</script>

<style scoped>
.location-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.location {
  display: inline-block;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.heart {
  width: 50px;
  height: 50px;
  font-size: 0;
  border: none;
  background: url('https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png') no-repeat;
  background-size: 2900%;
  outline: none;
  cursor: pointer;
}
.heart.is-liked{
  background-position: right;
}

.weather-box {
  text-align: center;
}
.temp {
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
.weather {
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(255, 255, 255, 0.25);
}
</style>