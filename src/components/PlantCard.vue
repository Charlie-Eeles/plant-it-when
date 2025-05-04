<script setup lang="ts">
import { defineProps } from "vue"

defineProps<{
  plant:  {
		plantId: number,
		plantName: string,
		plantType: string,
		whenToPlant: {
			apr: boolean,
			aug: boolean,
			dec: boolean,
			feb: boolean,
			jan: boolean,
			jul: boolean,
			jun: boolean,
			mar: boolean,
			may: boolean,
			nov: boolean,
			oct: boolean,
			sep: boolean
		},
		whenToHarvest: {
			apr: boolean,
			aug: boolean,
			dec: boolean,
			feb: boolean,
			jan: boolean,
			jul: boolean,
			jun: boolean,
			mar: boolean,
			may: boolean,
			nov: boolean,
			oct: boolean,
			sep: boolean
		}
	}
}>()
</script>

<template>
  <div class="plant-card">
    <div class="plant-info">
      <h2 class="plant-name">{{ plant.plantName }}</h2>
      <div class="plant-data">
        <p>{{ plant.plantType }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plant-card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.plant-info {
  padding: 1rem 2rem;
}

.plant-name {
  margin-top: 0;
  font-size: 1.5em;
}

.plant-data {
  margin-top: 0;
}
</style>
