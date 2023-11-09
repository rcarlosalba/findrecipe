import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import APIService from '../services/APIService';
import { useModalStore } from './modal';

export const useMealsStore = defineStore('meals', () => {
  const modalStore = useModalStore();
  const allCategories = ref([]);
  const selectedCategory = ref('');
  const mealsByCategory = ref([]);
  const recipeDetails = ref({});

  onMounted(async () => {
    const {
      data: { categories },
    } = await APIService.getCategories();
    allCategories.value = categories;
  });

  function getMealsByCategory(category) {
    category = selectedCategory.value;
    APIService.getMealsByCategory(category).then(({ data: { meals } }) => {
      mealsByCategory.value = meals;
    });
  }

  function getRecipeById(id) {
    APIService.getRecipeById(id).then(({ data: { meals } }) => {
      recipeDetails.value = meals[0];
      modalStore.handleClickModal();
    });
  }

  return {
    allCategories,
    selectedCategory,
    mealsByCategory,
    recipeDetails,
    getMealsByCategory,
    getRecipeById,
  };
});
