<template>
  <div class="my-cities" >
    <p
      class="city my-current-city"
      @click="$emit('find-weather-in-current-city')"
    >
      Find my current position
    </p>
    <h2 class="title">My cities</h2>
    <ul class="list" v-if="myCitiesList.length">
      <li class="item" v-for="city of myCitiesList" :key="city.name">
        <p class="city"
           @click="$emit('find-weather', city.name)"
           aria-label="Liked city">
          <span class="name">{{city.name}}, </span>
          <span class="code">{{city.country}}</span>
        </p>
        <button class="button"
                title="Delete city"
                @click="$emit('remove-city', city.name)"
                aria-label="Delete from favorite">
        </button>
      </li>
    </ul>
    <div class="cities-empty" v-else>
      Like city and it will be here
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCities',
    props: {
      myCitiesList: Array,
    }
  }
</script>

<style scoped>
@media (min-width: 992px) {
  .my-cities {
    position: absolute;
    left: 10px;
    height: 200px;
    overflow: auto;
    padding-right: 20px;
  }
}

.title {
  margin-bottom: 10px;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.city {
  cursor: pointer;
}

.my-current-city {
  margin: 10px 0 20px;
}

button {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
  border: none;
  outline: none;
}
button::before,
button::after {
   width: inherit;
   height: 2px;
   content: "";
   position: absolute;
   left: 0;
   background-color: red;
 }
button::before {
   transform: rotate(45deg);
 }
button::after {
   transform: rotate(-45deg);
 }

</style>