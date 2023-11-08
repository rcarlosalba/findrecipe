<script setup>
defineProps({
  meal: Object,
});

const viewRecipeDetails = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals[0]);
    });
};
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
        @click="viewRecipeDetails(meal.idMeal)"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<style scope></style>
