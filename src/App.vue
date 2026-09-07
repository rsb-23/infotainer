<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen bg-[#e8ebed] text-[#30363d] transition-colors dark:bg-[#30353a] dark:text-[#e4e8eb]"
  >
    <nav
      class="sticky top-0 z-30 border-b border-[#aeb8be] bg-[#e8ebed]/95 text-[#303a42] shadow-[0_3px_0_rgba(70,84,94,0.12)] backdrop-blur dark:border-[#59636a] dark:bg-[#30353a]/95 dark:text-[#e4e8eb]"
    >
      <div class="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          class="flex items-center gap-3 text-lg font-black tracking-tight text-[#1769e0] dark:text-[#67a3ff]"
        >
          <span
            class="grid h-9 w-9 place-items-center rounded-lg bg-[#ff0000] text-sm text-white shadow-[2px_3px_0_#8fb7e8]"
            >▶</span
          >
          <span class="underline decoration-[#4f8fe8] decoration-2 underline-offset-4">Infotainer</span>
        </a>
        <div class="hidden items-center gap-6 text-sm font-semibold text-[#59656e] sm:flex dark:text-[#c7d0d5]">
          <a href="#top" class="border-b-2 border-[#1769e0] pb-1 text-[#1769e0] dark:text-[#67a3ff]">Home</a>
          <a href="#topics" class="transition hover:text-[#1769e0] dark:hover:text-[#67a3ff]">Topics</a>
          <a href="#about" class="transition hover:text-[#1769e0] dark:hover:text-[#67a3ff]">About</a>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <label
            class="hidden items-center gap-2 rounded-lg border border-[#aeb8be] bg-white/45 px-3 py-2 text-sm text-[#56636c] shadow-inner sm:flex dark:border-[#5f6970] dark:bg-[#3b4247] dark:text-[#c9d1d5]"
          >
            <span aria-hidden="true">⌕</span>
            <input
              v-model="searchQuery"
              class="w-44 bg-transparent outline-none placeholder:text-[#89959c]"
              placeholder="Search channels..."
              aria-label="Search channels"
            />
          </label>
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-lg border border-[#9faab0] bg-white/45 text-base shadow-[2px_2px_0_#c3c9cd] transition hover:bg-white dark:border-[#606b72] dark:bg-[#3c4348] dark:hover:bg-[#474f54]"
            :aria-label="isDarkMode ? 'Use light mode' : 'Use dark mode'"
            @click="toggleDarkMode"
          >
            {{ isDarkMode ? "☀" : "☾" }}
          </button>
        </div>
      </div>
    </nav>

    <div id="top">
      <HeroSection />
    </div>

    <main id="get-started" class="mx-auto max-w-7xl px-4 pb-16 pt-0 sm:px-6 lg:px-8">
      <section
        class="-mt-7 relative z-10 mb-9 grid overflow-hidden rounded-sm border border-[#c6cdd1] bg-[#f4f5f5]/95 shadow-[3px_5px_0_#c8ced2] dark:border-[#5a6369] dark:bg-[#3a4044] dark:shadow-[3px_5px_0_#252a2e] sm:grid-cols-3"
      >
        <div
          class="flex items-center gap-4 border-b border-[#d0d5d8] px-6 py-5 dark:border-[#555e64] sm:border-b-0 sm:border-r"
        >
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#aab5bb] bg-[#e5e9eb] text-xl text-[#1769e0] dark:border-[#68737a] dark:bg-[#30363a] dark:text-[#67a3ff]"
            >▶</span
          >
          <div>
            <strong class="block text-xl font-black text-[#1769e0] dark:text-[#67a3ff]">{{ channels.length }}+</strong
            ><span class="text-xs font-semibold uppercase tracking-wide text-[#6c777e] dark:text-[#b5c0c5]"
              >Channels</span
            >
          </div>
        </div>
        <div
          class="flex items-center gap-4 border-b border-[#d0d5d8] px-6 py-5 dark:border-[#555e64] sm:border-b-0 sm:border-r"
        >
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#aab5bb] bg-[#e5e9eb] text-xl text-[#1769e0] dark:border-[#68737a] dark:bg-[#30363a] dark:text-[#67a3ff]"
            >▦</span
          >
          <div>
            <strong class="block text-xl font-black text-[#1769e0] dark:text-[#67a3ff]">{{ uniqueTagCount }}+</strong
            ><span class="text-xs font-semibold uppercase tracking-wide text-[#6c777e] dark:text-[#b5c0c5]"
              >Topics</span
            >
          </div>
        </div>
        <div class="flex items-center gap-4 px-6 py-5">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#aab5bb] bg-[#e5e9eb] text-xl text-[#1769e0] dark:border-[#68737a] dark:bg-[#30363a] dark:text-[#67a3ff]"
            >♧</span
          >
          <div>
            <strong class="block text-xl font-black text-[#1769e0] dark:text-[#67a3ff]">Curious</strong
            ><span class="text-xs font-semibold uppercase tracking-wide text-[#6c777e] dark:text-[#b5c0c5]"
              >Minds Welcome</span
            >
          </div>
        </div>
      </section>

      <section id="topics" class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.24em] text-[#1769e0] dark:text-[#67a3ff]">
            Curated learning
          </p>
          <h2 class="mt-2 text-3xl font-black tracking-tight text-[#1769e0] dark:text-[#67a3ff]">
            Find your next rabbit hole
          </h2>
          <p class="mt-1 text-sm text-[#6c777e] dark:text-[#b5c0c5]">
            {{ filteredChannels.length }} channels · {{ uniqueTagCount }} topics
          </p>
        </div>
        <label
          class="flex items-center gap-2 rounded-lg border border-[#b8c1c6] bg-[#f4f5f5]/90 px-4 py-2.5 text-sm shadow-sm dark:border-[#5a656c] dark:bg-[#3a4044] sm:hidden"
        >
          <span aria-hidden="true">⌕</span>
          <input
            v-model="searchQuery"
            class="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#89959c]"
            placeholder="Search channels..."
            aria-label="Search channels"
          />
        </label>
      </section>

      <TagFilter :channels="channels" :selectedTags="selectedTags" @filter="applyFilter" />

      <div v-if="filteredChannels.length" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardComponent
          v-for="channel in filteredChannels"
          :key="channel.id"
          :name="channel.name"
          :description="channel.description"
          :id="channel.id"
          :logo="channel.logo"
          :tags="channel.tags"
        />
      </div>

      <div
        v-else
        class="rounded-sm border border-dashed border-[#aeb8be] bg-[#f4f5f5] p-12 text-center shadow-[3px_4px_0_#c8ced2] dark:border-[#5c666d] dark:bg-[#3a4044]"
      >
        <p class="text-lg font-bold text-[#1769e0] dark:text-[#67a3ff]">No channels match your search or topics.</p>
        <button
          type="button"
          class="mt-3 text-sm font-bold text-[#536b7a] underline hover:text-[#334b59] dark:text-[#b7c7d0]"
          @click="clearFilters"
        >
          Clear filters
        </button>
      </div>
    </main>

    <footer id="about" class="border-t border-[#596771] bg-[#3f4b54] text-[#e9edef] dark:bg-[#272d31]">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <div>
          <div class="flex items-center gap-3 text-lg font-black text-[#67a3ff]">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-[#d5dadd] text-xs text-[#1769e0]">▶</span
            >Infotainer
          </div>
          <p class="mt-2 max-w-sm text-sm text-[#c7d0d5]">A curated directory of educational YouTube channels.</p>
        </div>
        <div class="flex gap-6 text-sm font-semibold text-[#d9e0e3]">
          <a href="#about" class="hover:text-[#67a3ff]">About</a>
          <a href="https://github.com/rsb-23/infotainer" class="hover:text-[#67a3ff]">Github</a>
        </div>
        <p class="text-sm text-[#d9e0e3]">♥ Made for curious minds.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import TagFilter from "./components/TagFilter.vue";
import channels from "./data/channels";

export default {
  name: "App",
  components: { CardComponent, HeroSection, TagFilter },
  data() {
    return { channels: [], isDarkMode: false, selectedTags: [], searchQuery: "" };
  },
  computed: {
    filteredChannels() {
      const query = this.searchQuery.trim().toLowerCase();
      return this.channels.filter((channel) => {
        const matchesTags = !this.selectedTags.length || this.selectedTags.every((tag) => channel.tags.includes(tag));
        const matchesSearch =
          !query || `${channel.name} ${channel.description} ${channel.tags.join(" ")}`.toLowerCase().includes(query);
        return matchesTags && matchesSearch;
      });
    },
    uniqueTagCount() {
      return new Set(this.channels.flatMap((channel) => channel.tags)).size;
    },
  },
  mounted() {
    this.channels = [...channels].sort((a, b) => a.name.localeCompare(b.name));
    this.isDarkMode = localStorage.getItem("infotainer-theme") === "dark";
    document.documentElement.classList.toggle("dark", this.isDarkMode);
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark", this.isDarkMode);
      localStorage.setItem("infotainer-theme", this.isDarkMode ? "dark" : "light");
    },
    applyFilter(tag) {
      this.selectedTags = this.selectedTags.includes(tag)
        ? this.selectedTags.filter((item) => item !== tag)
        : [...this.selectedTags, tag];
    },
    clearFilters() {
      this.selectedTags = [];
      this.searchQuery = "";
    },
  },
};
</script>
