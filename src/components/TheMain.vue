<template>
    <main>
        <transition
        name="toast"
        > 
            <CopyPopup v-if="isVisible"/>
        </transition>
        <AnimationSection title="Buttons" :effects="effects.buttons" @inspect="inspect"/>
        <AnimationSection title="Texts" :effects="effects.texts" @inspect="inspect" @showModal="showDialog"/>
        <AnimationSection title="Images" :effects="effects.images" @inspect="inspect" @showModal="showDialog"/>
        <AnimationSection title="Loaders" :effects="effects.loaders" @inspect="inspect" @showModal="showDialog"/>
        <element-code @close="hideDialog" :open="dialogIsVisible">
                <div class="selected__code">
                <div class="selected__heading">
                    <h3>HTML</h3>
                    <button @click="htmlCopy()" class="selected__button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" class="content_copy"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
                </div>
                <pre v-highlightjs><code class="html">{{inspectSrc.html}}</code></pre>
                </div>
            <div class="selected__code">
                <div class="selected__heading">
                    <h3>CSS</h3>
                    <button @click="cssCopy()" class="selected__button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" class="content_copy"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
                </div>
                <pre v-highlightjs class="css"><code class="css selected__css" >{{inspectSrc.css}}</code></pre>
            </div>
        </element-code>
    </main>
</template>

<script>
import { effects } from "../js/effects.js";
import AnimationSection from "./AnimationSection.vue";
import ElementCode from './ElementCode.vue';
import CopyPopup from './CopyPopup.vue';


export default {
    data() {
        return {
        effects,
        inspecting: false,
        inspectSrc: {},
        effectClicked: false,
        dialogIsVisible: false,
        isVisible: false,
        }
  },
  components: { AnimationSection, ElementCode, CopyPopup },
  methods: {
        inspect(html, css) {
            this.inspectSrc.html = html;
            this.inspectSrc.css = css;
            console.log(this.inspectSrc);
            this.dialogIsVisible = true;
        },     
        effectClick() {
        this.effectClicked = !this.effectClicked;
        },
        showDialog() {
        this.dialogIsVisible = true;
        },
        hideDialog() {
        this.dialogIsVisible = false;
        },
        htmlCopy() {
            this.$copyText(this.inspectSrc.html)
            .then(() => {
                console.log("copied!");
            })
            .catch(() => {
                console.log(`can't copy`);
            });
            this.visible();
        },
        cssCopy() {
            this.$copyText(this.inspectSrc.css)
            .then(() => {
                console.log("copied!");
            })
            .catch(() => {
                console.log(`can't copy`);
            });
            this.visible();
        },
        visible() {
            this.isVisible = !this.isVisible;
            setTimeout(() => this.isVisible = false, 2000)
            
        },
        
  }
}
</script>

<style lang="scss" scoped>
main {
    padding: 47px;
}
pre {
    margin: 0;
    padding: 15px;
    background: #242836;
    text-align: start;
}
code {
    margin: 0;
    padding: 20px;
    text-align: start;
    background: #0D0E14;
}
h3 {
    margin: 0;
    padding: 0;
}
.selected__code {
    margin: 0;
    padding: 0;
    text-align: left;
    width: 100%;
}
.selected__heading {
    padding: 0;
    width: 100%;
    background: #242836;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.selected__heading h3 {
    font-size: 21px;
    font-weight: 300;
    color: #fff;
    font-family: 'Inconsolata', monospace;
    padding: 14px 16px;
    letter-spacing: 2px;
    justify-self: start;
}
.content_copy {
    width: 24px;
    transition: 0.3s;
}
.content_copy:hover {
    fill: #DE314F;
}
.selected__button {
    background-color: inherit;
    border: none;
    outline: 0;
    cursor: pointer;
    padding: 5px;
    // margin-right: 10px;
    transition: .3s;
    border-radius: 10px;
    justify-self: end;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px)
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.toast-leave-to {
    opacity: 0;
    transform: translateY(-60px)
}
.toast-leave-active {
    transition: all 0.3s ease;
}
.selected__css {
    height: 250px;
}

</style>
