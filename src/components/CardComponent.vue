<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-sm border border-[#c8cdd0] bg-[#f4f5f5] shadow-[3px_5px_0_#c7cdd1] transition duration-300 hover:-translate-y-1 hover:shadow-[5px_8px_0_#b8c0c5] dark:border-[#5b6268] dark:bg-[#3b4145] dark:shadow-[3px_5px_0_#252a2e]">
    <div class="h-1.5 bg-[#586a77]"></div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start gap-4">
        <img :src="logo" :alt="`${name} logo`" class="h-16 w-16 shrink-0 rounded-full border-2 border-[#aeb8be] bg-[#eef0f1] object-cover shadow-sm dark:border-[#727d84] dark:bg-[#30363a]" />
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-black leading-6 text-[#1769e0] dark:text-[#4da3ff]">
            <a :href="channelUrl" target="_blank" rel="noopener noreferrer" class="text-[#1769e0] underline decoration-[#4f8fe8] decoration-1 underline-offset-4 transition hover:text-[#0d55bd] dark:text-[#4da3ff] dark:hover:text-[#72b7ff]">{{ name }}</a>
          </h2>
        </div>
      </div>
      <div class="mt-5 flex flex-wrap gap-1.5">
        <span v-for="tag in tags" :key="tag" class="rounded-full border border-[#c5ccd0] bg-[#e9ecee] px-2.5 py-1 text-[11px] font-bold text-[#52606a] dark:border-[#59636a] dark:bg-[#343b40] dark:text-[#d2d9dd]">{{ tag }}</span>
      </div>
      <p class="mt-4 flex-1 whitespace-pre-line text-sm leading-6 text-[#5b666e] dark:text-[#c2cbd0]">
        {{ truncatedDescription }}<button v-if="isTruncated" type="button" class="ml-1 font-black text-[#465b69] underline decoration-dotted underline-offset-2 hover:text-[#293943] dark:text-[#b8c7d0] dark:hover:text-white" @click="toggleDescription">{{ showFullDescription ? "Less" : "More" }}</button>
      </p>
    </div>
  </article>
</template>

<script>
const descriptionSize = 120;

export default {
  name: "CardComponent",
  props: {
    id: String,
    name: String,
    description: String,
    logo: String,
    tags: { type: Array, default: () => [] },
  },
  data() {
    return { showFullDescription: false };
  },
  computed: {
    channelUrl() {
      return `https://www.youtube.com/${this.id}`;
    },
    isTruncated() {
      return this.description.length > descriptionSize;
    },
    truncatedDescription() {
      return this.showFullDescription || !this.isTruncated ? this.description : `${this.description.substring(0, descriptionSize)}...`;
    },
  },
  methods: {
    toggleDescription() {
      this.showFullDescription = !this.showFullDescription;
    },
  },
};
</script>
