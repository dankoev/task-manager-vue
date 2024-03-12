<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  font-size: 1rem;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: #f2d200;
  box-shadow: 2px 2px 3px var(--shadow-color);
}
.btn:hover {
  cursor: pointer;
  opacity: 0.9;
}
.btn:active {
  transform: translateY(2px);
}
</style>
