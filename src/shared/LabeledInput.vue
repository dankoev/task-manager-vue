<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="labeled-input">
    <input v-bind="$attrs" />
    <label> {{ title }} </label>
  </div>
</template>

<style scoped>
.labeled-input {
  position: relative;
}
input {
  font-family: inherit;
  font-size: 1rem;
  border: 1px var(--shadow-color) solid;
  padding: 5px 10px;
  padding-top: 12px;
  border-radius: 5px;
  position: relative;
}
input:focus {
  outline: none;
  box-shadow: 2px 2px 3px var(--shadow-color);
}
label {
  position: absolute;
  left: 10px;
  top: -8px;
  background-color: white;
  padding: 2px 2px;
  font-size: 0.8rem;
}
</style>
