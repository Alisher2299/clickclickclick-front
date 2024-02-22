<template>
  <main class="personal">
    <div class="max-w-xl mt-8 mx-auto">
      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table>
          <tbody>
            <tr>
              <th scope="row">
                Your country
              </th>
              <td class="px-6 py-4">
                {{ country }}
              </td>
            </tr>
            <!-- <tr>
              <th scope="row">
                Your city
              </th>
              <td class="px-6 py-4">
                {{ city }}
              </td>
            </tr> -->
            <tr>
              <th scope="row">
                Your click statistics
              </th>
              <td class="px-6 py-4">
                {{ counter }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';
import Cookies from 'js-cookie';

const country = ref('');
// const city = ref('');
const counter = ref(0);
const uuidUser = ref(Cookies.get('uuid'));

onMounted(async () => {
  const url = `/api/v1/clicks/user-click/${uuidUser.value}`;

  const { data } = await useFetch(url).get().json();

  if (data.value) {
    country.value = data.value.country;
    counter.value = data.value.click_count;
    // city.value = data.value.city;
  }
});
</script>