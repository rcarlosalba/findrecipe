<script setup>
import { ref, onMounted } from 'vue';
import Recipe from '../components/Recipe.vue';
import Modal from '../components/Modal.vue';

const categories = ref([]);
const categorySelected = ref('');
const mealsByCategory = ref([]);

const fillCategories = () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      categories.value = data.categories;
    });
};
const getMealsByCategory = (event) => {
  categorySelected.value = event.target.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySelected.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      mealsByCategory.value = data.meals;
    });
};

onMounted(() => {
  fillCategories();
});
</script>

<template>
  <div class="container mx-auto max-w-5xl">
    <div>
      <form class="my-4">
        <div>
          <label
            for="categories"
            class="my-4 font-semibold text-xl"
            >Select a Category:
          </label>
          <select
            id="categories"
            name="categories"
            class="my-4 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            @change="getMealsByCategory($event)"
            v-model="categorySelected"
          >
            <option selected>-- Select a Category --</option>
            <option
              v-for="category in categories"
              :key="category.idCategory"
              :value="category.strCategory"
            >
              {{ category.strCategory }}
            </option>
          </select>
        </div>
      </form>
    </div>
    <main>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Recipe
          v-for="meal in mealsByCategory"
          :key="meal.idMeal"
          :meal="meal"
        />
      </div>
    </main>
  </div>
  <Modal />
</template>
