<template>
    <div class="circle">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
.circle {
    widows: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.circle div {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 3px solid #de314f;
    border-radius: 50% 50%;
}

.circle div:nth-child(1) {
    animation: 0.5s circleV infinite linear;
}

.circle div:nth-child(2) {
    animation-delay: -0.3s;
    width: 4rem;
    height: 4rem;
    animation: 0.9s circleH infinite linear;
}

.circle div:nth-child(3) {
    animation-delay: -0.5s;
    width: 6rem;
    height: 6rem;
    animation: 1s circleV infinite linear;
}

@keyframes circleV {
    0% {
        transform: rotateX(0deg);
    }
    50% {
        transform: rotateX(90deg);
    }
    100% {
        transform: rotateX(180deg);
    }
}

@keyframes circleH {
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(180deg);
    }
}
</style>