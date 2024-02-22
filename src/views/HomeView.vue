<template>
  <div class="flex justify-center items-center h-screen select-none" @click="clickCounter">
    <div class="flex flex-col gap-2 justify-center items-center my-6 text-2xl">
      <div class="flex gap-1 text-center text-7xl">
        {{ countUser }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useGeolocation, useDebounceFn, useFetch } from '@vueuse/core';
import { toast } from 'vue3-toastify';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const countUser = ref(0);
const uuidUser = ref(Cookies.get('uuid') || uuidv4());

const { coords, error } = useGeolocation();

function clickCounter() {
  countUser.value += 1;

  postCounter();
}

const postCounter = useDebounceFn(async () => {
  const url = '/api/v1/clicks/user-click/';
  const payload = {
    click_count: countUser.value,
    latitude: coords.value.latitude,
    longitude: coords.value.longitude,
    username: uuidUser.value,
  };

  await useFetch(url).post(payload).json();
  countUser.value = 0;
}, 1000);

watch(error, () => {
  if (error.value) {
    toast('Произошла ошибка получения геолокации, клики не будут засчитываться!', {
      autoClose: 3000,
      type: 'error',
    });
  }
});

onMounted(() => {
  Cookies.set('uuid', uuidUser.value);
});
</script>