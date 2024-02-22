<template>
  <main>
    <AppNavbar />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import 'vue3-toastify/dist/index.css';

import AppNavbar from '@/components/AppNavbar.vue';
</script>