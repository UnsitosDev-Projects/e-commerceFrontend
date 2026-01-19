<script lang="ts">
    export default{
        data(){
            return{
                count: 0
            };
        },
        methods:{
            increase(){
                this.count++;
            },
            decrease(){
                this.count--;
            }
        },
        mounted(){
            console.log('Componente contador montado ' + this.count);
        }
    }
</script>

<template>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Incrementar</button>
    <button @click="decrease">Decrementar</button>
</template>