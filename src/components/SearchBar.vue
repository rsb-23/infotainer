<template>
  <div class="mt-4">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
      class="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      @input="updateSearch"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: String,
  },
  computed: {
    searchQuery: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    updateSearch() {
      this.$emit("input", this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the search bar here if needed */
</style>
