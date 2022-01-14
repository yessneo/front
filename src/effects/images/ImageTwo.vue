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
    object-fit: cover;
    width: 200px;
    height: 200px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

img:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}
</style>