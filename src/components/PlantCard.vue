<script setup lang="ts">
import { defineProps } from "vue"

defineProps<{
  name: string
  category: string
  growMonth: string
  harvestTime: string
  tempRange: string
  imageUrl: string
}>()
</script>

<template>
  <div class="plant-card">
    <img :src="imageUrl" alt="Plant image" class="plant-image" />
    <div class="plant-info">
      <h2 class="plant-name">{{ name }}</h2>
      <div class="plant-data">
        <label>Category:</label>
        <p>{{ category }}</p>
      </div>

      <div class="plant-data">
        <label>Grow Month:</label>
        <p>{{ growMonth }}</p>
      </div>

      <div class="plant-data">
        <label>Harvest Time:</label>
        <p>{{ harvestTime }}</p>
      </div>

      <div class="plant-data">
        <label>Temperature Range:</label>
        <p>{{ tempRange }}</p>
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

.plant-image {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.plant-info {
  padding: 1rem 2rem;
}

.plant-name {
  margin-top: 0;
  font-size: 1.5em;
}

.plant-data label {
  display: block;
  font-weight: bold;
}

.plant-data p {
  margin-top: 0;
}

@media (max-width: 600px) {
  .plant-card {
    flex-direction: column;
  }

  .plant-image {
    width: 100%;
  }
}
</style>
