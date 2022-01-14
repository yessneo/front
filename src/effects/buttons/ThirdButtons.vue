<template>
    <button>HOVER ME</button>
</template>
<style scoped>
button {
  z-index: 1;
  position: relative;
  padding: 0.5em 1em;
  background-color: #de314f;
}
button:hover {
  cursor: pointer;
}
button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid #de314f;
  border-radius: 6px;
  transform-origin: center;
  transform: scale(1);
}
button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}            
</style>