import { ref, watch, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';
import { useMealsStore } from './meals';
import { useModalStore } from './modal';

export const useFavoritesStore = defineStore('favorites', () => {
  const mealsStore = useMealsStore();
  const modalStore = useModalStore();
  const allFavorites = ref([]);

  onMounted(() => {
    allFavorites.value = JSON.parse(localStorage.getItem('favorites')) ?? [];
  });

  watch(
    allFavorites,
    () => {
      syncLocalStorage();
    },
    {
      deep: true,
    }
  );

  const isEmpty = computed(() => allFavorites.value.length === 0);

  function syncLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(allFavorites.value));
  }

  function isThereFavorite() {
    const favInLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
    return favInLS.some(
      (fav) => fav.idMeal === mealsStore.recipeDetails.idMeal
    );
  }

  function deleteFavorite() {
    allFavorites.value = allFavorites.value.filter(
      (fav) => fav.idMeal !== mealsStore.recipeDetails.idMeal
    );
  }

  function addFavorite() {
    allFavorites.value.push(mealsStore.recipeDetails);
  }

  function manageFavorites() {
    if (isThereFavorite()) {
      deleteFavorite();
    } else {
      addFavorite();
    }
    modalStore.modal = false;
  }
  return {
    manageFavorites,
    allFavorites,
    isThereFavorite,
    isEmpty,
  };
});
