<template>
  <div class="flex flex-wrap gap-2 mb-4">
    <button
      v-for="tag in uniqueTags"
      :key="tag"
      @click="filterByTag(tag)"
      :class="{
        'bg-blue-500 text-white': selectedTags.includes(tag),
        'bg-gray-200 text-gray-800': !selectedTags.includes(tag),
      }"
      class="py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-400"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TagFilter",
  props: {
    channels: Array,
    selectedTags: Array,
  },
  computed: {
    uniqueTags() {
      const tags = this.channels.flatMap((channel) => channel.tags);
      return Array.from(new Set(tags));
    },
  },
  methods: {
    filterByTag(tag) {
      this.$emit("filter", tag);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
