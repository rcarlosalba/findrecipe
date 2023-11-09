import api from '../lib/axios';

export default {
  getCategories() {
    return api.get('/categories.php');
  },
  getMealsByCategory(category) {
    return api.get(`/filter.php?c=${category}`);
  },
  getRecipeById(id) {
    return api.get(`/lookup.php?i=${id}`);
  },
};
