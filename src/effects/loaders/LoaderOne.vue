<template>
    <div class="balls">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
.balls {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.balls div{
    position: absolute;
    margin: 10px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50% 50%;
    background: #DE314F;
    animation: 1.5s ball infinite ease;
}
.balls div:nth-child(2){
    transform: translate(-1.25rem);
    animation-delay: 0.5s;
}
.balls div:nth-child(3){
    transform: translate(1.25rem);
    animation-delay: 1s;
}
@keyframes ball {
                    0%{
                        width: 1.25rem;
                        height: 1.25rem;
                    }
                    50%{
                        width: 0;
                        height: 0;
                    }
                    100%{
                        width: 1.25rem;
                        height: 1.25rem;
                    }
                }
</style>