<template>
  <!-- No tag buttons, render nothing -->
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
      return Array.from(new Set(tags)).sort();
    },
  },
  methods: {
    toggleTag(tag) {
      const updatedTags = this.selectedTags.includes(tag)
        ? this.selectedTags.filter((t) => t !== tag)
        : [...this.selectedTags, tag];
      this.$emit("filter", updatedTags);
    },
  },
};
</script>

<style scoped>
/* ...existing code... */
</style>
