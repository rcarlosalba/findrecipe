<script setup>
import { useMealsStore } from '../stores/meals';
import { useModalStore } from '../stores/modal';
const meals = useMealsStore();
const modal = useModalStore();
defineProps({
  meal: Object,
});
</script>

<template>
  <div>
    <h1 class="text-center my-2 font-semibold truncate">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full h-64 object-cover rounded-md"
    />
    <div class="flex justify-center items-center mt-2">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        @click="meals.getRecipeById(meal.idMeal)"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<style scope></style>
