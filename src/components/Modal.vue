<script setup>
import { useModalStore } from '../stores/modal';
import { useMealsStore } from '../stores/meals';
import { useFavoritesStore } from '../stores/favorites';
const modal = useModalStore();
const meals = useMealsStore();
const favorites = useFavoritesStore();
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

const areThereIngredients = () => {
  const ingredientsDiv = document.createElement('div');
  for (let i = 1; i < 20; i++) {
    if (meals.recipeDetails[`strIngredient${i}`] !== '') {
      const ingredient = meals.recipeDetails[`strIngredient${i}`];
      const measure = meals.recipeDetails[`strMeasure${i}`];
      const ingredientDiv = document.createElement('div');
      ingredientDiv.textContent = `${ingredient} - ${measure}`;
      ingredientsDiv.appendChild(ingredientDiv);
    }
  }
  return ingredientsDiv;
};
</script>

<template>
  <TransitionRoot
    as="template"
    :show="modal.modal"
  >
    <Dialog
      as="div"
      class="relative z-10"
      @close="modal.handleClickModal"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle
                    as="h3"
                    class="text-lg text-center leading-6 font-medium text-gray-900"
                  >
                    {{ meals.recipeDetails.strMeal }}
                  </DialogTitle>
                  <img
                    :src="meals.recipeDetails.strMealThumb"
                    :alt="meals.recipeDetails.strMeal"
                    class="mx-auto w-96 my-4"
                  />
                  <h4 class="text-lg font-semibold my-4">Ingredients:</h4>
                  <div v-html="areThereIngredients().outerHTML"></div>
                  <h4 class="text-lg font-semibold my-4">Instruction:</h4>
                  <p class="mt-2 text-sm text-gray-500 leading-8">
                    {{ meals.recipeDetails.strInstructions }}
                  </p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:col-start-1 sm:text-sm"
                  @click="modal.handleClickModal"
                >
                  Close
                </button>
                <button
                  class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-700 focus:outline-none sm:col-start-1 sm:text-sm"
                  @click="favorites.manageFavorites()"
                >
                  {{ modal.textButton }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
