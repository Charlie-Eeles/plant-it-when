<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import PlantCard from "@/components/PlantCard.vue"
const apiUrl = import.meta.env.VITE_API_URL;

const plants: Ref<any> = ref([]);
const searchVal = ref("");

const filteredPlants = computed(() => {
  let val = plants.value;
  if(!val?.length) return [];

  if(searchVal.value) {
    val = val.filter((plant: any) => plant.plantName.toLowerCase().includes(searchVal.value.toLowerCase()));
  }

  return val;
})

async function getPlantInfo() {
  try {
    const res = await fetch(`${apiUrl}/plant-info`);
    plants.value = await res.json();
  } catch (err) {
    console.error("An error occurred getting plant info", err);
  }
}
getPlantInfo();
</script>

<template>
  <div class="container">
    <div class="header-card">
      <h1> Plant It When </h1>
      <p> Simple, straightforward planting and harvesting calendars for common garden plants </p>
      <input type="text" placeholder="Search for a plant..." v-model="searchVal"/>
    </div>
    <div class="key-bar">
      <span>🌱 Plant</span>
      <span>🌾 Harvest</span>
    </div>

    <PlantCard
      v-for="plant in filteredPlants"
      :key="plant.id"
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

.header-card {
  padding: 1rem;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  background-color: #014421;
  flex-direction: column;
}

.header-card input {
  width: 50%;
  padding: 0.5rem;
  border: 0;
  outline: none;
  font-size: 1rem;
  border-radius: 5px;
  margin: 1rem auto;
}

.header-card h1 {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  color: white;
}
.header-card p {
  margin: 1rem auto;
  color: white;
  width: 90%;
}

.plant-card {
  width: 100%;
}

.key-bar {
  position: sticky;
  top: 0;
  background: #014421;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #014421;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 10;
}

.key-bar span {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

@media (max-width: 1000px) {
  .container {
    width: 90%;
  }

  .plant-card {
    width: 100%;
  }

  .header-card input,
  .header-card p {
    width: 75%;
  }
}

@media (max-width: 600px) {
  .header-card input,
  .header-card p {
    width: 90%;
  }
}
</style>
