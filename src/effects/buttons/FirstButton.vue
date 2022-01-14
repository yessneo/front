<template>
  <button>HOVER ME</button>
</template>
<style scoped>
button {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
button::before {
  content: '';
  display: block;
  position: absolute;
  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #242836;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  z-index: -1;
}
button:hover {
  color: #fff;
}
button:hover::before {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
</style>