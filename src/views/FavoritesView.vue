<script setup>
import Recipe from '../components/Recipe.vue';
import Modal from '../components/Modal.vue';
import { useFavoritesStore } from '../stores/favorites';
const favorites = useFavoritesStore();
</script>

<template>
  <main class="container mx-auto max-w-5xl my-16">
    <h1 class="text-center text-3xl font-semibold mb-4">Favorites</h1>
    <div v-if="favorites.isEmpty">
      <h2 class="text-center text-xl font-semibold mb-4">No favorites yet!</h2>
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Recipe
        v-for="meal in favorites.allFavorites"
        :key="meal.idMeal"
        :meal="meal"
      />
    </div>
  </main>
  <Modal />
</template>

<style scope></style>
