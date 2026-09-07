<template>
  <div class="mb-8 flex flex-wrap gap-2">
    <button
      v-for="tag in uniqueTags"
      :key="tag"
      type="button"
      @click="filterByTag(tag)"
      :class="selectedTags.includes(tag) ? 'border-[#1769e0] bg-[#1769e0] text-white shadow-[2px_3px_0_#8fb7e8]' : 'border-[#c2c9cd] bg-[#f5f6f6]/90 text-[#52606a] hover:border-[#7098b5] hover:bg-white hover:text-[#1769e0] dark:border-[#59636a] dark:bg-[#3b4247] dark:text-[#d3d9dd] dark:hover:border-[#7098b5] dark:hover:bg-[#444b50] dark:hover:text-[#67a3ff]'"
      class="rounded-full border px-4 py-2 text-xs font-bold capitalize transition"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TagFilter",
  props: {
    channels: { type: Array, default: () => [] },
    selectedTags: { type: Array, default: () => [] },
  },
  computed: {
    uniqueTags() {
      return Array.from(new Set(this.channels.flatMap((channel) => channel.tags))).sort();
    },
  },
  methods: {
    filterByTag(tag) {
      this.$emit("filter", tag);
    },
  },
};
</script>
