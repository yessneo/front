<template>
<p>HOVER ME</p>
</template>
<style scoped>
p {
    transition: 0.5s;
    position: relative;
    display: inline-block;
}
p:hover {
    -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
}
@-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }
    
    to {
      -webkit-mask-position: -50%;
    }
}                    
</style>