<template>
  <nav class="bg-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
      <div class="items-center justify-between flex w-auto">
        <ul class="flex font-medium p-0 rounded-lg space-x-8 flex-row mt-0">
          <li>
            <RouterLink
              to="/"
              :class="{
                'menu-item--active': currentLocation === '/',
                'menu-item': currentLocation !== '/'
              }"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/statistics"
              :class="{
                'menu-item--active': currentLocation === '/statistics',
                'menu-item': currentLocation !== '/statistics'
              }"
            >
              Statistics
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/personal"
              :class="{
                'menu-item--active': currentLocation === '/personal',
                'menu-item': currentLocation !== '/personal'
              }"
            >
              Personal
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

const currentLocation = ref(window.location.pathname);

const interval = setInterval(() => {
  currentLocation.value = window.location.pathname;
}, 200);

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>