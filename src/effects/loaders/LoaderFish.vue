<template>
<div class="fish">
   <div class="body"></div>
   <div class="tail"></div>
   <div class="back_fin"></div>
   <div class="bottom_fin"></div>
   <div class="bubble">
      <div class="big"></div>
      <div class="small"></div>
   </div>
</div>
</template>


<style scoped>
.fish {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
	cursor: pointer;
}

.fish .body {
    position: absolute;
    width: 100px;
    height: 50px;
    background: #de314f;
    border-radius: 50% 50% 50% 50%;
    transform: translateX(20px);
    animation: body 1s infinite ease-in-out;
    transform-origin: right;
}

@keyframes body {
    0% {
        transform: rotateY(0);
    }
    50% {
        transform: rotateY(20deg);
    }
    100% {
        transform: rotateY(0);
    }
}

.fish .tail {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 30px 30px;
    border-radius: 10px;
    border-color: transparent transparent transparent #de314f;
    animation: fish 1s infinite ease-in-out;
    transform-origin: right;
}

@keyframes fish {
    0% {
        transform: translateX(-40px) rotateY(0);
    }
    50% {
        transform: translateX(-40px) rotateY(40deg);
    }
    100% {
        transform: translateX(-40px) rotateY(0);
    }
}

.fish .back_fin {
    position: absolute;
    width: 30px;
    height: 10px;
    background: #de314f;
    border-radius: 50% 50% 10% 10%;
    transform-origin: right;
    animation: back 1s infinite ease-in-out;
}

@keyframes back {
    0% {
        transform: translate(0px, -25px) rotateY(0);
    }
    50% {
        transform: translate(0px, -25px) rotateY(20deg);
    }
    100% {
        transform: translate(0px, -25px) rotateY(0);
    }
}

.fish .bottom_fin {
    position: absolute;
    width: 10px;
    height: 5px;
    background: #de314f;
    border-radius: 10% 10% 50% 50%;
    transform-origin: right;
    animation: bottom 1s infinite ease-in-out;
}

@keyframes bottom {
    0% {
        transform: translate(0px, 25px) rotateY(0);
    }
    50% {
        transform: translate(0px, 25px) rotateY(20deg);
    }
    100% {
        transform: translate(0px, 25px) rotateY(0);
    }
}

.fish .bubble {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fish .bubble .big {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50% 50%;
    animation: big_bubble 1.2s infinite linear;
}

@keyframes big_bubble {
    0% {
        opacity: 1;
        transform: translate(100px, -20px);
    }
    50% {
        transform: translateY(-24px);
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-100px, -20px);
    }
}

.fish .bubble .small {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    background: #fff;
    border-radius: 50% 50%;
    animation: small_bubble 1s infinite linear;
}

@keyframes small_bubble {
    0% {
        opacity: 1;
        transform: translate(100px, 20px);
    }
    50% {
        opacity: 1;
        transform: translateY(30px);
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-100px, 20px);
    }
}
</style>