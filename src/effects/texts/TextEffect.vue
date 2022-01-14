<template>
<p>HOVER ME</p>
</template>
<style scoped>
p {
    transition:all 0.3s ease;
    transform: scale(1);
}
p:hover {
    transform: scale(1.1);
}
</style>