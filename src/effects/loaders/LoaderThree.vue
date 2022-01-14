<template>
    <div class="square">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
.square{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.square div{
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background: #DE314F;
    border-radius: 50% 50%;
    animation: 1.5s square infinite ease;
}
.square div:nth-child(2){
    animation-delay: -0.5s;
}
.square div:nth-child(3){
    animation-delay: -1s;
}
@keyframes square {
                    0%{
                        opacity: 0.8;
                        width: 0;
                        height: 0;
                    }
                    100%{
                        opacity: 0;
                        width: 3.1rem;
                        height: 3.1rem;
                    }
                }
</style>