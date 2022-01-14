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
    transition: all 0.3s ease;
}

img:hover {
    transform: rotate(-25deg) scale(1.5);
}
</style>