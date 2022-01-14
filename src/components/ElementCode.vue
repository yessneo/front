<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
            <!-- <div class="tabs">
                    <button class="tabs__button">HTML</button>
                    <button class="tabs__button">CSS</button>
            </div> -->
            <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 40px;
  width: 16rem;
  padding: 0;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.tabs {
    padding: 0;
    width: 100%;
    background: #242836;
}
.tabs__button {
    font-family: 'Inconsolata', monospace;
    background-color: inherit;
    border: none;
    outline: 0;
    cursor: pointer;
    padding: 14px 16px;
    transition: .3s;
    font-size: 17px;
    color: #fff
}
.tabs__button:hover {
    background-color: #242836;
    color: #de314f
}
.tab__button.active {
    background-color: #de314f
}
@media screen and (min-width:430px) {
  dialog {
    top: 40px;
    width: 30rem;
  }
}
@media screen and (min-width:960px) {
  dialog {
    top: 40px;
    width: 35rem;
  }
}
@media screen and (min-width:1280px) {
  dialog {
    top: 40px;
    width: 40rem;
  }
}
</style>