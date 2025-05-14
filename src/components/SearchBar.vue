<template>
  <div class="relative mb-10 flex flex-col items-center w-full">
    <div class="relative w-full max-w-xl">
      <input
        v-model="query"
        @input="onInput"
        @keydown.down.prevent="moveSelection(1)"
        @keydown.up.prevent="moveSelection(-1)"
        @keydown.enter.prevent="selectSuggestion"
        type="text"
        class="w-full px-6 py-4 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 dark:bg-gray-900 dark:text-gray-100 text-lg transition-all duration-200 placeholder:italic placeholder:text-blue-400 dark:placeholder:text-blue-200"
        placeholder="🔍 Search channels, playlists, or tags..."
        autocomplete="off"
      />
      <ul
        v-if="showSuggestions && filteredSuggestions.length"
        class="absolute left-0 right-0 bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-700 rounded-2xl mt-2 z-20 max-h-56 overflow-y-auto shadow-xl"
      >
        <li
          v-for="(suggestion, idx) in filteredSuggestions"
          :key="suggestion"
          :class="[
            'px-6 py-3 cursor-pointer transition-colors duration-150',
            idx === selectedIndex
              ? 'bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100'
              : 'hover:bg-blue-50 dark:hover:bg-blue-800'
          ]"
          @mousedown.prevent="selectSuggestion(idx)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
    <!-- Selected tags with close mark (moved below search bar) -->
    <div
      v-if="selectedTags.length"
      class="flex flex-wrap gap-2 mt-3 w-full max-w-xl justify-start"
    >
      <span
        v-for="(tag, idx) in selectedTags"
        :key="tag"
        class="flex items-center bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm shadow transition-all duration-200"
      >
        <span class="truncate max-w-xs">{{ tag && tag.length ? tag : 'Tag' }}</span>
        <button
          class="ml-2 text-blue-600 dark:text-blue-200 hover:text-red-500 dark:hover:text-red-400 focus:outline-none font-bold text-lg"
          @click="removeTag(idx)"
          aria-label="Remove tag"
        >
          &times;
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    suggestions: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "search", "update:tags"],
  data() {
    return {
      query: this.modelValue,
      showSuggestions: false,
      selectedIndex: -1,
      selectedTags: [],
    };
  },
  watch: {
    modelValue(val) {
      this.query = val;
    },
    query(val) {
      this.$emit("update:modelValue", val);
      this.showSuggestions = !!val && this.filteredSuggestions.length > 0;
      this.selectedIndex = -1;
      this.$emit("search", val);
    },
  },
  computed: {
    filteredSuggestions() {
      if (!this.query) return [];
      const q = this.query.toLowerCase();
      // Exclude already selected tags
      return this.suggestions.filter(
        (s) => s.toLowerCase().includes(q) && !this.selectedTags.includes(s)
      );
    },
  },
  methods: {
    onInput() {
      this.showSuggestions = !!this.query && this.filteredSuggestions.length > 0;
    },
    moveSelection(dir) {
      if (!this.showSuggestions) return;
      const max = this.filteredSuggestions.length - 1;
      let idx = this.selectedIndex + dir;
      if (idx < 0) idx = max;
      if (idx > max) idx = 0;
      this.selectedIndex = idx;
    },
    selectSuggestion(idx) {
      // If idx is undefined (Enter key), use selectedIndex or current query
      if (typeof idx === "undefined") {
        idx = this.selectedIndex;
      }
      let selected = null;
      if (idx >= 0 && idx < this.filteredSuggestions.length) {
        selected = this.filteredSuggestions[idx];
      } else if (this.query) {
        selected = this.query;
      }

      // Determine if the selected suggestion is a tag or a name
      const isTag = this.suggestions && this.$parent && this.$parent.allTags
        ? this.$parent.allTags.includes(selected)
        : false;

      if (isTag) {
        // Add tag, clear search bar
        if (!this.selectedTags.includes(selected)) {
          this.selectedTags.push(selected);
          this.$emit("update:tags", this.selectedTags.slice());
        }
        this.query = "";
        this.showSuggestions = false;
        this.selectedIndex = -1;
        this.$emit("update:modelValue", "");
        this.$emit("search", "");
      } else if (selected) {
        // Complete the text in the search bar for names
        this.query = selected;
        this.showSuggestions = false;
        this.selectedIndex = -1;
        this.$emit("update:modelValue", selected);
        this.$emit("search", selected);
      }
    },
    removeTag(idx) {
      this.selectedTags.splice(idx, 1);
      this.$emit("update:tags", this.selectedTags.slice());
    },
  },
};
</script>
