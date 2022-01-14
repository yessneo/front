<template>
    <section class="section">
        <h2 class="section__title">{{ title }}</h2>
        <div class="section__container">
            <animation-element v-for="effect in this.effects" :key="effect.id" @inspect="inspect(effect.html, effect.css)">
                <component :is="effect.name"/>
            </animation-element>
        </div>
    </section>
</template>
<script>
import { components } from "./../js/effects.js";
import AnimationElement from "./AnimationElement.vue";

export default {
    data() {
        return {
            checkCode: false,
            src: {}
        }
    },
    components: { AnimationElement, ...components },
    props: {
        effects: Object,
        title: String,
    },
    methods: {
        inspect(html, css) {
            this.$emit('inspect', html, css)
        },
        showModal() {
            this.$emit('show-modal')
        }
    }
}
</script>

<style lang="scss" scoped>
.section__container {
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  justify-items: center
}
@media screen and (min-width:630px) {
  .section__container {
    grid-template-columns: 1fr 1fr
  }
}
@media screen and (min-width:960px) {
  .section__container {
    grid-template-columns: 1fr 1fr 1fr
  }
}
@media screen and (min-width:1280px) {
  .section__container {
    grid-template-columns: 1fr 1fr 1fr 1fr
  }
}
.section__title {
    font-family: 'Inconsolata', monospace;
    font-size: 2.1rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 3px
}
.section__container p{
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 5px;
  cursor: pointer;
  color: #fff;
  font-family: "inconsolata", monospace;
}
.section__container button {
  font-family: 'Inconsolata', monospace; 
  background: #de314f;
  border: 1px solid #de314f;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  border-radius: 6px;
  border: none;
  letter-spacing: 4px;
  width: 237px;
  height: 59px;
  cursor: pointer;
}
</style>