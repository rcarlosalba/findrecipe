<script setup>
import Recipe from '../components/Recipe.vue';
import Modal from '../components/Modal.vue';
import { useMealsStore } from '../stores/meals';
const meals = useMealsStore();
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
            v-model="meals.selectedCategory"
            @change="meals.getMealsByCategory()"
          >
            <option selected>-- Select a Category --</option>
            <option
              v-for="category in meals.allCategories"
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
          v-for="meal in meals.mealsByCategory"
          :key="meal.idMeal"
          :meal="meal"
        />
      </div>
    </main>
  </div>
  <Modal />
</template>
