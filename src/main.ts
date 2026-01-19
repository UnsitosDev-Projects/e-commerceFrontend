import { createApp } from 'vue'
import Contador from './Contador.vue'
import ContadorExa from './examples/ContadorComposition.vue'

const app = createApp(ContadorExa)

app.mount('#app')