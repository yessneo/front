<template>
    <div class="copied"><p>The code was copied to your clipboard</p></div>
</template>
<script>
export default {
    methods: {
        
    }
}
</script>
<style scoped>
.copied {
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #4acd87;
  height: 80px;
  text-align: center;
  transition: 0.3s ease-in;
  overflow: hidden;
  z-index: 10000
}
.copied p {
  color: #fff;
  font-family: 'inconsolata',monospace;
  font-size: 18px;
  transition: 0.3s;
  align-self: center
}
</style>