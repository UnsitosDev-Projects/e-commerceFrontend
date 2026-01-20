<script lang="ts">
    export default {
        data(){
            return{
                count: 0
            };
        },
        methods:{
            decrease(){
                this.count--;
            },
            increase(){
                this.count++;
            },
            mounted() {
                console.log('Componente contador montado '+ this.count)
            },
        }
    }
</script>
<template>
    <p>Objetivo: Tienes que llegar a 10 clicks</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Incrementar</button>
    <button @click="decrease">Decrementar</button>
    <p v-if="count<=10">¡Vamos tú púedes!</p>
    <p v-else>¡Lo lograsteeeee!</p>
</template>