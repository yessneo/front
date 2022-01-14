<template>
    <div class="bounce">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
.bounce {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bounce div {
    margin: 10px;
    width: 1.25rem;
    height: 1.25rem;
    background: #DE314F;
    border-radius: 50% 50%;
    animation: 0.9s bounce infinite ease;
    cursor: pointer;
}

.bounce div:nth-child(1) {
    animation-delay: -0.3s;
}

.bounce div:nth-child(2) {
    animation-delay: -0.6s;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>