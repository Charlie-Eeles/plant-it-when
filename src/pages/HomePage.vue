<script setup lang="ts">
import { ref } from 'vue'
import PlantCard from "@/components/PlantCard.vue"
const apiUrl = import.meta.env.VITE_API_URL;

const plants = ref([]);

async function getPlantInfo() {
  try{
    const res = await fetch(`${apiUrl}/plant-info`);
    plants.value = await res.json();
  } catch(err) {
    console.error("An error occurred getting plant info", err);
  }
}
getPlantInfo();

</script>

<template>
  <div class="container">
    <PlantCard
      v-for="plant in plants"
      :plant="plant"
      class="plant-card"
    />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  width: 50%;
  flex-direction: column;
}

.plant-card {
  width: 100%;
}

@media (max-width: 1300px) {
  .container {
    width: 90%;
  }

  .plant-card {
    width: 100%;
  }
}
</style>
