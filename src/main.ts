import { createApp } from 'vue'
import Contador from './Contador.vue'
import ContadorExaC from './examples/ContadorComposition.vue'
import ContadorExaO from './examples/ContadorOptions.vue'
import ProductList from './components/ProductList.vue'

const app = createApp(ProductList)

app.mount('#app')