<template>
  <div
    class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 max-w-sm"
  >
    <img
      class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 dark:border-gray-700"
      :src="logo"
      :alt="name + ' logo'"
    />
    <h2 class="text-xl font-semibold mb-2 text-gray-900" align="center">
      <a
        :href="channelUrl"
        class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ name }}
      </a>
    </h2>
    <p class="text-gray-600 mb-4">
      {{ truncatedDescription }}
      <span
        v-if="isTruncated"
        class="text-blue-600 dark:text-blue-400 hover:text-blue-800 cursor-pointer"
        @click="toggleDescription"
      >
        {{ showFullDescription ? "See less" : "See more" }}
      </span>
    </p>
  </div>
</template>

<script>
const descriptionSize = 100;
export default {
  name: "CardComponent",
  props: {
    id: String,
    name: String,
    description: String,
    logo: String,
  },
  data() {
    return {
      showFullDescription: false,
    };
  },
  computed: {
    channelUrl() {
      return `https://www.youtube.com/${this.id}`;
    },
    isTruncated() {
      return this.description.length > descriptionSize; // Adjust length as needed
    },
    truncatedDescription() {
      if (this.showFullDescription || !this.isTruncated) {
        return this.description;
      }
      return this.description.substring(0, descriptionSize) + "..."; // Adjust length as needed
    },
  },
  methods: {
    toggleDescription() {
      this.showFullDescription = !this.showFullDescription;
    },
  },
};
</script>

<style scoped>
img:hover {
  filter: brightness(0.9) contrast(1.1);
  transition: filter 0.3s ease-in-out;
}
p span {
  display: inline-block;
  margin-left: 4px;
  font-weight: bold;
}
</style>
