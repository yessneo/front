<template>
    <div class="rotation">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
.rotation{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.rotation div {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background: #DE314F;
    border-radius: 50% 50%;
    animation: 1.5s rotation infinite ease;
}
.rotation div:nth-child(2){
    animation-delay: -0.5s;
}
.rotation div:nth-child(3) {
    animation-delay: -1s;
}
@keyframes rotation {
                    0%{
                        transform: translate(-20px,-20px);
                    }
                    25%{
                        transform: translate(-20px,20px);
                    }
                    50%{
                        transform: translate(20px,20px);
                    }
                    75%{
                        transform: translate(20px,-20px);
                    }
                    100%{
                        transform: translate(-20px,-20px);
                    }
                }
</style>