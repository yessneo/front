<template>
<div>
  <img src="./../../assets/img/nike.webp" alt="Nike Shoes">
</div>
</template>
<style scoped>
div {
    margin: 10px;
    width: 200px;
    height: 200px;
    cursor: pointer;
}

img {
    filter: blur(3px);
    transition: all .3s ease;
    object-fit: cover;
    width: 200px;
    height: 200px;
}

img:hover {
    filter: blur(0);
}
</style>