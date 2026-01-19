<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    const contador = ref(0);

    function incrementar(){
        contador.value++;
    }

    onMounted(()=>{
        console.log('El valor inicial del contador es: ', contador.value)
    });
</script>

<template>
    <p>HOla soy la versión con composition API</p>
    <h1>Contador: {{ contador }}</h1>
    <button @click="incrementar">Incrementar</button>
</template>