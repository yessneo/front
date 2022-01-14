<template>
<div class="clock">
    <div class="circle"></div>
    <div class="hand">
        <div class="big"></div>
        <div class="small"></div>
    </div>
    <div class="center"></div>
</div>
</template>

<style scoped>
.clock {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.clock .circle {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #de314f;
    border-radius: 50% 50%;
}

.clock .hand {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #de314f;
    border-radius: 50% 50%;
}

.clock .hand .big {
    margin: 0 auto;
    height: 50px;
    width: 3px;
    background: #fff;
    border-radius: 0 0 10px 10px;
    animation: bighand 5s infinite linear;
    transform-origin: bottom;
}

@keyframes bighand {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.clock .hand .small {
    margin: 0 auto;
    height: 30px;
    width: 3px;
    background: #fff;
    border-radius: 10px 10px 0 0;
    animation: smallhand 60s infinite linear;
    transform-origin: top;
}

@keyframes smallhand {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.clock .center {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50% 50%;
}
</style>