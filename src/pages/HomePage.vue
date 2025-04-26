<script setup lang="ts">
import PlantCard from "@/components/PlantCard.vue"
import tomatoImg from "@/assets/tomato.jpg"

const plants = [
  {
    name: "Tomato",
    category: "Vegetable",
    growMonth: "March",
    harvestTime: "July - September",
    tempRange: "18°C - 27°C",
    imageUrl: tomatoImg,
  },
  {
    name: "Basil",
    category: "Herb",
    growMonth: "April",
    harvestTime: "June - August",
    tempRange: "20°C - 30°C",
    imageUrl: tomatoImg,
  },
  {
    name: "Strawberry",
    category: "Fruit",
    growMonth: "March",
    harvestTime: "May - June",
    tempRange: "15°C - 25°C",
    imageUrl: tomatoImg,
  },
  {
    name: "Carrot",
    category: "Root Vegetable",
    growMonth: "April",
    harvestTime: "July - September",
    tempRange: "15°C - 21°C",
    imageUrl: tomatoImg,
  },
  {
    name: "Sunflower",
    category: "Flower",
    growMonth: "April",
    harvestTime: "August - September",
    tempRange: "18°C - 30°C",
    imageUrl: tomatoImg,
  },
]
</script>

<template>
  <div class="container">
    <PlantCard
      v-for="plant in plants"
      :name="plant.name"
      :category="plant.category"
      :growMonth="plant.growMonth"
      :harvestTime="plant.harvestTime"
      :tempRange="plant.tempRange"
      :imageUrl="plant.imageUrl"
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
