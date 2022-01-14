import { createApp } from 'vue'
import App from './App.vue'


import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/dark.css';
import copyText from "@meforma/vue-copy-to-clipboard";


const app = createApp(App);
app.use(VueHighlightJS);
app.use(copyText);

app.mount('#app');
