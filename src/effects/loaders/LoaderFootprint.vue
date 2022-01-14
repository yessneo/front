<template>
<div class="foot">
    <div class="foot_right">
        <div class="foot_right_front"></div>
        <div class="foot_right_back"></div>
    </div>
    <div class="foot_left">
        <div class="foot_left_front"></div>
        <div class="foot_left_back"></div>
    </div>
    <div class="foot_left"></div>
</div>
</template>

<style scoped>
.foot {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.foot_right {
    transform: translateX(10px);
    position: absolute;
    animation: walkR 2s infinite linear;
}

.foot_right_front {
    transform: translateY(-5px);
    width: 1rem;
    height: 1.5rem;
    border-radius: 50% 50% 50% 50%/60% 60% 10% 10%;
    background: #de314f;
}

.foot_right_back {
    width: 1rem;
    height: 1rem;
    border-radius: 50% 50% 50% 50%/10% 10% 60% 60%;
    background: #de314f;
}

@keyframes walkR {
    0% {
        transform: translate(5px, -70px) rotate(5deg);
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translate(5px, 70px) rotate(5deg);
        opacity: 0;
    }
}

.foot_left {
    transform: translateX(-10px);
    position: absolute;
    animation: walkL 2s infinite linear;
    animation-delay: -1s;
}

.foot_left_front {
    transform: translateY(-5px);
    width: 1rem;
    height: 1.5rem;
    border-radius: 50% 50% 50% 50%/60% 60% 10% 10%;
    background: #de314f;
}

.foot_left_back {
    width: 1rem;
    height: 1rem;
    border-radius: 50% 50% 50% 50%/10% 10% 60% 60%;
    background: #de314f;
}

@keyframes walkL {
    0% {
        transform: translate(-5px, -70px) rotate(-5deg);
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translate(-5px, 70px) rotate(-5deg);
        opacity: 0;
    }
}
</style>