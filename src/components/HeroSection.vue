<template>
  <header class="relative bg-gray-800 text-white py-16">
    <div class="absolute inset-0">
      <img
        src="../assets/bg3.jpg"
        alt="Background Image"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div class="relative container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Welcome to Infotainer
      </h1>
      <p class="text-lg md:text-2xl mb-8">
        Explore infotainment channels from a well curated list of youtube
        channels.
      </p>
      <a
        href="#get-started"
        class="hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Get Started
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Optional: Add any additional styles for the Hero section */
</style>
