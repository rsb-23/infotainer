<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen p-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
    <HeroSection />
    <!-- Spacing between HeroSection and SearchBar -->
    <div class="h-10"></div>
    <!-- Use modularized dark mode toggle -->
    <DarkModeToggle v-model="isDarkMode" @toggle="toggleDarkMode" />

    <!-- Search Bar -->
    <div class="flex justify-center w-full">
      <SearchBar
        v-model="searchQuery"
        :suggestions="searchSuggestions"
        @search="onSearch"
        @update:tags="selectedTags = $event"
      />
    </div>

    <!-- Tag Filter (optional, can be restyled similarly if needed) -->
    <div class="flex justify-center w-full">
      <TagFilter
        :channels="channels"
        :selectedTags="selectedTags"
        :allTags="allTags"
        @filter="applyFilter"
      />
    </div>

    <!-- Tabs Section -->
    <div class="mt-12 max-w-7xl mx-auto px-2">
      <div class="flex border-b border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 rounded-t-2xl shadow-sm overflow-x-auto">
        <button
          class="px-6 py-3 focus:outline-none font-semibold text-lg transition-all duration-200"
          :class="{
            'border-b-4 border-blue-600 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950': activeTab === 'channels',
            'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900': activeTab !== 'channels',
          }"
          @click="activeTab = 'channels'"
        >
          Channels
        </button>
        <button
          class="px-6 py-3 focus:outline-none font-semibold text-lg transition-all duration-200"
          :class="{
            'border-b-4 border-blue-600 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950': activeTab === 'playlists',
            'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900': activeTab !== 'playlists',
          }"
          @click="activeTab = 'playlists'"
        >
          Playlists
        </button>
      </div>

      <!-- Channels Tab -->
      <div v-if="activeTab === 'channels'" class="mt-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      <div v-if="activeTab === 'playlists'" class="mt-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
import DarkModeToggle from "./components/DarkModeToggle.vue";
import channels from "./data/channels";
import playlists from "./data/playlists";

export default {
  name: "App",
  components: {
    CardComponent,
    HeroSection,
    TagFilter,
    SearchBar,
    DarkModeToggle,
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
    allTags() {
      // Collect tags from both channels and playlists for autocomplete
      const channelTags = this.channels.flatMap((c) => c.tags || []);
      const playlistTags = this.playlists.flatMap((p) => p.tags || []);
      return Array.from(new Set([...channelTags, ...playlistTags])).sort();
    },
    searchSuggestions() {
      // Suggest channel names, playlist names, and all tags
      const channelNames = this.channels.map((c) => c.name);
      const playlistNames = this.playlists.map((p) => p.name);
      return Array.from(
        new Set([...channelNames, ...playlistNames, ...this.allTags])
      ).sort();
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
    onSearch(query) {
      // If the query matches a tag, auto-select it
      if (this.allTags.includes(query) && !this.selectedTags.includes(query)) {
        this.selectedTags.push(query);
      }
    },
  },
};
</script>

<style scoped>
/* Modernize scrollbar for suggestions and grid */
::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #c7d2fe;
  border-radius: 4px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
#dark-mode-toggle {
  padding: 0;
}
</style>
