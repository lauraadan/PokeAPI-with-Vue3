<template>
    <Navbar/>
    <!-- router view para mostrar la ruta actual donde el usuario se encuentra -->
    <router-view></router-view>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>
<style scoped>
</style>