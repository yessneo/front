<template>
    <div class="house">
        <div class="roof"></div>
        <div class="wall"></div>
        <div class="chimney"></div>
        <div class="smoke">
            <div></div>
            <div></div>
        </div>
    </div>

</template>

<style scoped>
.house {
    widows: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.house .roof {
    position: absolute;
    transform: translateY(-20px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 40px 40px;
    border-color: transparent transparent #de314f transparent;
}

.house .wall {
    position: absolute;
    transform: translateY(10px);
    height: 50px;
    width: 50px;
    background: #de314f;
}

.house .chimney {
    position: absolute;
    transform: translate(-20px, -25px);
    height: 20px;
    width: 10px;
    background: #de314f;
}

.house .smoke div {
    position: absolute;
    transform: translate(-25px, -34px);
    height: 6px;
    width: 10px;
    border-radius: 50% 50%;
    background: #de314f;
    animation: 1.5s smoke infinite ease;
}

.house .smoke div:nth-child(2) {
    animation-delay: 0.5s;
}

@keyframes smoke {
    0% {
        width: 10px;
    }
    20% {
        width: 10px;
    }
    100% {
        width: 20px;
        opacity: 0;
        transform: translate(-25px, -70px);
    }
}
</style>