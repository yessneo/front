<template>
    <div class="nine">
        <div class="nine_one">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="nine_two">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="nine_three">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.nine {
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.nine_one div {
    margin: 10px 5px 10px 5px;
    width: 1.25rem;
    height: 1.25rem;
    background: #de314f;
    border-radius: 50% 50%;
    animation: nine 2s infinite ease;
}

.nine_one div:nth-child(1) {
    animation-delay: -0.25s;
}

.nine_one div:nth-child(2) {
    animation-delay: -2s;
}

.nine_one div:nth-child(3) {
    animation-delay: -1.75s;
}

.nine_two div {
    margin: 10px 5px 10px 5px;
    width: 1.25rem;
    height: 1.25rem;
    background: #de314f;
    border-radius: 50% 50%;
    animation: nine 2s infinite ease;
}

.nine_two div:nth-child(1) {
    animation-delay: -0.5s;
}

.nine_two div:nth-child(2) {
    animation: none;
    opacity: 0;
}

.nine_two div:nth-child(3) {
    animation-delay: -1.5s;
}

.nine_three div {
    margin: 10px 5px 10px 5px;
    width: 1.25rem;
    height: 1.25rem;
    background: #de314f;
    border-radius: 50% 50%;
    animation: nine 2s infinite ease;
}

.nine_three div:nth-child(1) {
    animation-delay: -0.75s;
}

.nine_three div:nth-child(2) {
    animation-delay: -1s;
}

.nine_three div:nth-child(3) {
    animation-delay: -1.25s;
}

@keyframes nine {
    0% {
        opacity: 1;
    }
    98% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>