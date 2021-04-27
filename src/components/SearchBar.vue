<template>
  <div class="search-bar">
    <input
      type="text"
      class="input"
      placeholder="Enter city name"
      :value="currentInput"
      @input="$emit('change-current-input', $event.target.value)"
    />
    <button
      class="button"
      @click="$emit('find-weather', currentInput)"
    >
      Search
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      currentInput: String
    }
  }
</script>

<style scoped>
.search-bar {
  width: 90%;
  max-width: 700px;
  padding-top: 20px;
  margin: 0 auto 30px;
}
.input {
  width: 70%;
  min-height: 42px;
  padding: 15px 16px;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  color: #313131;
  background-color: rgba(255,255,255,0.15);
  border: none;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.input:hover, .input:focus {
  box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.75);
  border-radius: 16px 0px 16px 0px;
}

.button {
  min-height: 42px;
  margin-left: 20px;
  padding: 15px 16px;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border: none;
  border-radius: 5px;
  background-color: rgba(86, 180, 255, 0.15);
  color: #3635ff;
}

.button:hover {
  box-shadow: 0px 0px 8px rgba(0,0,0,0.55);
  cursor: pointer;
}
</style>