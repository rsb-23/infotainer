<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen p-4">
    <HeroSection />
    <div id="dark-mode-toggle" class="absolute top-4 right-4">
      <label class="flex items-center cursor-pointer">
        <span class="mr-2 text-gray-900 dark:text-gray-100">🌙</span>
        <!-- Dark mode icon -->
        <input
          type="checkbox"
          class="hidden"
          v-model="isDarkMode"
          @click="toggleDarkMode"
        />
        <div class="relative">
          <div class="block bg-gray-600 w-12 h-6 rounded-full"></div>
          <div
            :class="{
              'translate-x-6': !isDarkMode,
              'translate-x-0': isDarkMode,
            }"
            class="absolute left-0 top-0 bg-blue-600 w-6 h-6 rounded-full transition-transform"
          ></div>
        </div>
        <span class="ml-2 text-gray-900 dark:text-gray-100">🌞</span>
        <!-- Light mode icon -->
      </label>
    </div>

    <TagFilter
      :channels="channels"
      :selectedTags="selectedTags"
      @filter="applyFilter"
    />

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <CardComponent
        v-for="channel in filteredChannels"
        :key="channel.id"
        :name="channel.name"
        :description="channel.description"
        :id="channel.id"
        :logo="channel.logo"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import TagFilter from "./components/TagFilter.vue";
import channels from "./data/channels";

export default {
  name: "App",
  components: {
    CardComponent,
    HeroSection,
    TagFilter,
  },
  data() {
    return {
      channels: channels,
      isDarkMode: false,
      selectedTags: [],
    };
  },
  computed: {
    filteredChannels() {
      if (this.selectedTags.length === 0) return this.channels;
      return this.channels.filter((channel) =>
        this.selectedTags.every((tag) => channel.tags.includes(tag))
      );
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark", this.isDarkMode);
    },
    applyFilter(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
  },
};
</script>

<style scoped>
/* Style for toggle switch */
#dark-mode-toggle {
  padding: 1em;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
