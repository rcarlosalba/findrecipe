<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-blue-950 text-white h-20 w-full">
    <div
      class="container mx-auto max-w-5xl flex items-center justify-between h-full px-2"
    >
      <div>
        <RouterLink :to="{ name: 'home' }">
          <h1 class="text-2xl font-semibold">Meal Finder</h1>
        </RouterLink>
      </div>
      <nav>
        <ul class="flex items-center gap-4">
          <li>
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'favorites' }">My Favorites</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
