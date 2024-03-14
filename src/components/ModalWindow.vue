<template>
  <Teleport to="body">
    <dialog class="dialog" open v-bind="$attrs">
      <div class="dialog__window">
        <header class="dialog-window__header">
          <button class="dialog-window__close" @click="$emit('close')">
            <span uk-icon="close"></span>
          </button>
        </header>
        <section class="dialog-window__content">
          <slot></slot>
        </section>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.dialog {
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(34, 33, 33, 0.356);
  width: 100vw;
  height: 100vh;
  z-index: 3;
}
.dialog__window {
  --dialog-width: clamp(400px, 50%, 600px);
  --dialog-height-max: 350px;
  margin: 20vh auto auto auto;
  padding: 0 20px 20px 20px;
  width: var(--dialog-width);
  max-height: var(--dialog-height-max);
  background-color: white;
  border-radius: 10px;
}
.dialog-window__content {
  max-height: calc(var(--dialog-height-max) - 50px);
  overflow-y: auto;
}

.dialog-window__header {
  height: 30px;
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
}
.dialog-window__close {
  border: none;
  background: none;
}
</style>
