import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useFavoritesStore } from './favorites';
import { useMealsStore } from './meals';

export const useModalStore = defineStore('modal', () => {
  const favoritesStore = useFavoritesStore();
  const mealsStore = useMealsStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textButton = computed(() => {
    return favoritesStore.isThereFavorite(mealsStore.recipeDetails.idMeal)
      ? 'Remove from favorites'
      : 'Add to favorites';
  });

  return {
    modal,
    handleClickModal,
    textButton,
  };
});
