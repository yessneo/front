<template>
    <button>Hello</button>
</template>
<style scoped>
button {
    position: relative;
    z-index: 10;
    background: #242836
  }
button::after {
    content: 'HOVER ME';
    background: #de314f;
    -webkit-transition: all .6s ease;
    -o-transition: all .6s ease;
    transition: all .6s ease;
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 59px;
    border: #de314f 1px solid;
    border-radius: 6px;
  }
button:hover {
    border: #de314f 1px solid
  }
button:hover::after {
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg)
  }                  
</style>