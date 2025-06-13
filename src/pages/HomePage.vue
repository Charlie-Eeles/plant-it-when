<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import PlantCard from "@/components/PlantCard.vue"
import plantInfo from "@/assets/plant-info.json"
import type { MonthKey, Plant } from '@/types';

const plants: Ref<Plant[]> = ref(plantInfo);
const searchVal = ref("");
const monthFilter = ref("all");

const filteredPlants = computed(() => {
  let val = plants.value;
  if(!val?.length) return [];

  if(monthFilter.value !== "all") {
    val = val.filter((plant: Plant) => plant.whenToPlant[monthFilter.value as MonthKey]);
  }

  if(searchVal.value) {
    val = val.filter((plant: Plant) => plant.plantName.toLowerCase().includes(searchVal.value.toLowerCase()));
  }

  return val;
})

</script>

<template>
  <div class="container">
    <div class="header-card">
      <h1> Plant It When </h1>
      <p> Simple, straightforward planting and harvesting calendars for common garden plants. </p>
      <input type="text" placeholder="Search for a plant..." v-model="searchVal"/>
      <div class="month-filter">
        <span class="month-label">What to plant in:</span>
        <select id="selectMonth" name="selectMonth" v-model="monthFilter">
          <option value="all">All months</option>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
          <option value="apr">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">August</option>
          <option value="sep">September</option>
          <option value="oct">October</option>
          <option value="nov">November</option>
          <option value="dec">December</option>
        </select>
      </div>
    </div>
    <div class="key-bar">
      <span>🌱 Plant</span>
      <span>🌾 Harvest</span>
    </div>

    <PlantCard
      v-for="plant in filteredPlants"
      :key="plant.plantId"
      :plant="plant"
      class="plant-card"
    />
    <p v-if="!filteredPlants.length" class="no-results">Sorry, no plants found matching filters.</p>
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
  text-align: center;
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

.month-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem auto;
  flex-wrap: wrap;
  color: white;
}

.month-label {
  font-size: 1rem;
  font-weight: 500;
}

.header-card select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  width: auto;
  background: white;
  color: #014421;
  cursor: pointer;
}

.no-results {
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
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

  .month-filter {
    flex-direction: column;
  }
}
</style>
