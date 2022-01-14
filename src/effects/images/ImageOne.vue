<template>
<div>
  <img src="./../../assets/img/nike.webp" alt="Nike Shoes">
</div>
</template>
<style scoped>
div {
    overflow: hidden;
    margin: 10px;
    width: 200px;
    height: 200px;
    cursor: pointer;
}

img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    transform: scale(1);
    transition: 0.3s ease-in-out;
}

img:hover {
    transform: scale(1.3);
}
        
</style>