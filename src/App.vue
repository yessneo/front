<template>
  <TheHeader />
  <TheMain />
  <TheFooter />
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  data() {
    return {
      effectClicked: false,
    }
  },
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheFooter
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import './assets/lib/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Jura&display=swap');

body {
  background: #242836;
  padding: 21px;
}
</style>
