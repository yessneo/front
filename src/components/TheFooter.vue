<template>
    <footer>
        <div class="logo">
            <img src="./../assets/logo.svg" class="logo__img" alt="logo">
            <p class="logo__title">FrontAni</p>
            <p class="logo__tagline">Hover Animations</p>
        </div>
        <p class="footer__txt">Background Generator was created by Yessneo and toshi14f.<br>
        <span class="footer__highlight--white">Want more like this?</span> Check out 
            <a href="ani.html">
                <span class="footer__highlight--red">HOVER</span>
            </a> and <a href="index.html">
        <span class="footer__highlight--red">BACKGROUND</span>
        </a>
        </p>
        <small>Copyright &copy; 2020 Yessneo</small>
    </footer>
</template>

<style scoped>
footer {
  background: #242836;
  width: 100%;
  display: -ms-grid;
  display: grid
}
footer p {
  margin: 0
}
footer .logo {
  font-family: "Jura",sans-serif;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: -webkit-min-content 1fr;
  -ms-grid-columns: min-content 1fr;
  grid-template-columns: -webkit-min-content 1fr;
  grid-template-columns: min-content 1fr;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}
footer .logo .logo__title {
  font-size: 2.6rem;
  color: #fff;
  margin-left: 10px
}
footer .logo .logo__tagline {
  grid-column: span 2;
  font-size: 1.6rem;
  color: #de314f;
  margin-top: 6px
}
.logo__img {
    width: 40px;
    height: 37px;
}
footer .footer__txt {
  margin-top: 20px;
  font-family: inconsolata,monospace;
  font-size: 0.9rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1.8rem
}
footer .footer__highlight--white {
  font-weight: 600
}
footer .footer__highlight--red {
  color: #de314f;
  font-weight: 600
}
footer small {
  -ms-grid-column-align: center;
  justify-self: center;
  color: #fff;
  font-family: "inconsolata" ,monospace;
  font-size: 0.9rem;
  margin-top: 83px;
  font-weight: 300;
}
</style>