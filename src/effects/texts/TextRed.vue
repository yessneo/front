<template>
<p>HOVER ME</p>
</template>

<style scoped>
p {
  position: relative;
}

p::before, p::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

p::before {
  left: -8px;
}

p::after {
  right: -8px;
}

p:hover::before, p:hover::after {
  transform: scaleY(1);
}

</style>