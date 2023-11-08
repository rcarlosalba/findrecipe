<script setup></script>

<template>
  <footer
    class="bg-blue-950 text-white w-full h-fit block sticky bottom-0 py-4"
  >
    <div
      class="container bottom-0 mx-auto max-w-5xl flex items-center justify-between h-full px-2"
    >
      <div>
        <RouterLink :to="{ name: 'home' }">
          <h1 class="text-2xl font-semibold">Meal Finder</h1>
        </RouterLink>
      </div>
      <div>
        <p>Developed by <a href="#">@rcarlosalba</a></p>
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
  </footer>
</template>
