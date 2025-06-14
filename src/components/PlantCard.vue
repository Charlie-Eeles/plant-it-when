<script setup lang="ts">
import type { MonthKey, Plant } from "@/types";
import { defineProps } from "vue";

defineProps<{
  plant: Plant;
}>();

function determinePlantTypeEmoji(plantType: string) {
  const type = plantType.toLowerCase();
  if (type === "vegetable") return "🥕";
  if (type === "fruit") return "🍎";
  if (type === "herb") return "🌿";
  if (type === "flower") return "🌻";
  return "";
}
</script>

<template>
  <div class="plant-card">
    <div class="plant-info">
      <h2 class="plant-name">
        {{ determinePlantTypeEmoji(plant.plantType) }} {{ plant.plantName }} -
        <small> {{ plant.plantType }}</small>
      </h2>

      <div class="calendar">
        <div class="calendar-row">
          <div
            class="calendar-header"
            v-for="month in ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']"
            :key="month"
          >
            {{ month }}
          </div>
        </div>
        <div class="calendar-row">
          <div
            class="calendar-value"
            v-for="month in ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']"
            :key="month"
          >
            {{ plant.whenToPlant[month.toLowerCase() as MonthKey] ? "🌱" : "" }}
            {{ plant.whenToHarvest[month.toLowerCase() as MonthKey] ? "🌾" : "" }}
          </div>
        </div>

        <div class="calendar-row">
          <div
            class="calendar-header"
            v-for="month in ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
            :key="month"
          >
            {{ month }}
          </div>
        </div>
        <div class="calendar-row">
          <div
            class="calendar-value"
            v-for="month in ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
            :key="month"
          >
            {{ plant.whenToPlant[month.toLowerCase() as MonthKey] ? "🌱" : "" }}
            {{ plant.whenToHarvest[month.toLowerCase() as MonthKey] ? "🌾" : "" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plant-card {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.plant-info {
  padding: 1rem 2rem;
  width: 100%;
}

.plant-name {
  margin-top: 0;
  font-size: 1.5em;
}

.plant-data {
  margin-top: 0.5rem;
}

.calendar {
  width: 100%;
  display: table;
  border-collapse: collapse;
}

.calendar-row {
  display: table-row;
}

.calendar-header {
  background-color: #014421;
  color: white;
}

.calendar-header,
.calendar-value {
  display: table-cell;
  text-align: center;
  padding: 0.75rem 0.5rem;
  border: 1px solid #ddd;
}
</style>
