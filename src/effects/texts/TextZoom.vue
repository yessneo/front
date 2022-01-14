<template>
<p>HOVER ME</p>
</template>
<style scoped>
p {
    transition: 0.5s;
    position: relative;
    display: inline-block;
}
p:after {
        transition: 0.5s;
        position: absolute;
        bottom: -5px;
        left: -5px;
        content: '';
        width: 3px;
        height: 100%;
        border-bottom: 3px solid #DE314F;
        border-right: 3px solid #DE314F;
        opacity: 0;
}
p:hover::after {
    width: 110%;
    height: 100%;
    opacity: 1;
}
</style>