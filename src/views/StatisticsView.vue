<template>
  <main>
    <div class="max-w-xl mt-8 mx-auto">
      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table>
          <tbody>
            <tr
              v-for="(country, index) in countries"
              :key="country.country"
            >
              <th scope="row">
                <svg
                  v-if="index <= 2"
                  class="w-6 h-6"
                  :class="{
                    'fill-yellow-400': index === 0,
                    'fill-slate-400': index === 1,
                    'fill-bronze-400': index === 2,
                  }"
                >
                  <use xlink:href="@/assets/icons/cup.svg#cup"></use>
                </svg>
                <span>
                  {{ country.country }}
                </span>
              </th>
              <td class="px-6 py-4">
                {{ country.click_count }}
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

const countries = ref([
  {
    id: 1,
    click_count: '',
    country: '',
    // city: '',
  }
]);

onMounted(async () => {
  const url = '/api/v1/clicks/statistic/';
  const { data } = await useFetch(url).get().json();

  if (data.value) {
    countries.value = [...data.value];
  }
});
</script>