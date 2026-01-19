<template>
  <v-app>
    <v-container>
      <v-text-field v-model="msg"/>
      <v-card title="Card title" subtitle="Subtitle" text="...">
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const msg=ref('Hello world')
</script>