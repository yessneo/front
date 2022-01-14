<template>
    <header>
        <div class="logo">
            <img src="./../assets/logo.svg" class="logo__img" alt="logo">
            <h1 class="logo__title">FrontAni</h1>
            <p class="logo__tagline">HOVER ANIMATIONS</p>
        </div>
    </header>
</template>
<style scoped>
header {
    width: 100%;
}
header p {
  margin: 0
}
.logo {
    font-family: 'Jura', sans-serif;
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
}
.logo__img {
    width: 40px;
    height: 37px;
}
header .logo .logo__title {
    margin: 0;
    font-size: 2.6rem;
    color: #fff;
    margin-left: 10px;
    font-weight: 300;
}
header .logo .logo__tagline {
    display: none;
    grid-column: span 2;
    font-size: 1.6rem;
    color: #de314f;
    margin-top: 6px;
}
@media screen and (min-width:480px) {
    header .logo .logo__tagline {
        display: block
    }
}
</style>

