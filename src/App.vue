<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen p-4">
    <HeroSection />
    <div id="dark-mode-toggle" class="absolute top-4 right-4">
      <label class="flex items-center cursor-pointer">
        <span class="mr-2 text-gray-900 dark:text-gray-100">🌙</span>
        <!-- Dark mode icon -->
        <input type="checkbox" class="hidden" v-model="isDarkMode" @click="toggleDarkMode" />
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

    <TagFilter :channels="channels" :selectedTags="selectedTags" @filter="applyFilter" />

    <!-- Search Bar -->
    <SearchBar v-model="searchQuery" />

    <!-- Tabs Section -->
    <div class="mt-8">
      <div class="flex border-b border-gray-300 dark:border-gray-700">
        <button
          class="px-4 py-2 focus:outline-none"
          :class="{
            'border-b-2 border-blue-600 text-blue-600': activeTab === 'channels',
            'text-gray-900 dark:text-gray-100': activeTab !== 'channels',
          }"
          @click="activeTab = 'channels'"
        >
          Channels
        </button>
        <button
          class="px-4 py-2 focus:outline-none"
          :class="{
            'border-b-2 border-blue-600 text-blue-600': activeTab === 'playlists',
            'text-gray-900 dark:text-gray-100': activeTab !== 'playlists',
          }"
          @click="activeTab = 'playlists'"
        >
          Playlists
        </button>
      </div>

      <!-- Channels Tab -->
      <div v-if="activeTab === 'channels'" class="mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardComponent
            v-for="channel in filteredChannels"
            :key="channel.id"
            :name="channel.name"
            :description="channel.description"
            :id="channel.id"
            :logo="channel.logo"
            type="channel"
          />
        </div>
      </div>

      <!-- Playlists Tab -->
      <div v-if="activeTab === 'playlists'" class="mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardComponent
            v-for="playlist in filteredPlaylists"
            :key="playlist.id"
            :name="playlist.name"
            :description="playlist.description"
            :id="playlist.id"
            :logo="playlist.logo"
            type="playlist"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import TagFilter from "./components/TagFilter.vue";
import SearchBar from "./components/SearchBar.vue";
import channels from "./data/channels";
import playlists from "./data/playlists";

export default {
  name: "App",
  components: {
    CardComponent,
    HeroSection,
    TagFilter,
    SearchBar,
  },
  data() {
    return {
      channels: [],
      playlists: [],
      isDarkMode: false,
      selectedTags: [],
      activeTab: "channels", // Default tab
      searchQuery: "", // Search query
    };
  },
  mounted() {
    this.channels = channels.sort((a, b) => a.name.localeCompare(b.name));
    this.playlists = playlists.sort((a, b) => a.name.localeCompare(b.name));
  },
  computed: {
    filteredChannels() {
      const filteredByTags = this.selectedTags.length
        ? this.channels.filter((channel) => this.selectedTags.every((tag) => channel.tags.includes(tag)))
        : this.channels;
      return filteredByTags.filter((channel) => channel.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    filteredPlaylists() {
      const filteredByTags = this.selectedTags.length
        ? this.playlists.filter((playlist) => this.selectedTags.every((tag) => playlist.tags.includes(tag)))
        : this.playlists;
      return filteredByTags.filter((playlist) => playlist.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
