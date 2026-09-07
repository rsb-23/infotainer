<template>
  <header
    class="relative isolate overflow-hidden border-b border-slate-300 bg-[#eef0f1] text-[#30363d] dark:border-slate-700 dark:bg-[#34393e] dark:text-[#e4e8eb]"
  >
    <div
      class="absolute inset-0 -z-10 opacity-70 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(91,111,126,0.12)_32px)] dark:bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(200,210,218,0.08)_32px)]"
    ></div>
    <div class="absolute inset-y-0 left-[7%] -z-10 w-px bg-[#b86c6c]/25 dark:bg-[#c88989]/20"></div>
    <div
      class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20"
    >
      <div class="max-w-3xl pl-0 lg:pl-8">
        <p class="text-xs font-black uppercase tracking-[0.3em] text-[#1769e0] dark:text-[#4da3ff]">
          Learn · Explore · Grow
        </p>
        <h1
          class="mt-3 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-[#1769e0] sm:text-6xl lg:text-7xl dark:text-[#4da3ff]"
        >
          The Best<br /><span
            class="text-[#1769e0] underline decoration-[#4f8fe8] decoration-4 underline-offset-8 dark:text-[#4da3ff]"
            >Educational Channels</span
          >
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-8 text-[#56616a] dark:text-[#c0c9cf] sm:text-xl">
          A curated directory of YouTube channels that <strong>inform, inspire</strong> and entertain. Discover quality
          content on science, technology, history and more.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#get-started"
            class="inline-flex items-center rounded-lg border-2 border-[#1769e0] bg-[#1769e0] px-6 py-3 text-sm font-black text-white shadow-[3px_4px_0_#8fb7e8] transition hover:-translate-y-0.5 hover:bg-[#0d55bd] focus:outline-none focus:ring-2 focus:ring-[#4f8fe8]"
            >▶ <span class="ml-2">Explore Channels</span><span class="ml-3">→</span></a
          >
          <a
            href="#topics"
            class="inline-flex items-center rounded-lg border-2 border-[#8c9aa4] bg-[#f5f6f6]/80 px-6 py-3 text-sm font-black text-[#1769e0] shadow-[2px_3px_0_#c3c9cd] transition hover:bg-white dark:border-[#7d8b95] dark:bg-[#3d4449] dark:text-[#4da3ff]"
            >▦ <span class="ml-2">Browse Topics</span></a
          >
        </div>
      </div>
      <div class="relative hidden min-h-[320px] items-center justify-center lg:flex">
        <div
          class="relative w-72 rotate-[-3deg] rounded-sm border border-[#d5d0bd] bg-[#f5edcf] p-8 shadow-[5px_8px_18px_rgba(45,52,58,0.18)] dark:border-[#625d4e] dark:bg-[#555244]"
        >
          <div
            class="absolute -top-5 left-1/2 h-10 w-24 -translate-x-1/2 rotate-2 bg-[#c8bfa4]/70 dark:bg-[#8c856e]/60"
          ></div>
          <div
            class="grid h-32 place-items-center rounded-xl border-2 border-[#1769e0] text-6xl text-[#1769e0] dark:border-[#4da3ff] dark:text-[#4da3ff]"
          >
            ▷
          </div>
          <p class="mt-6 text-center text-lg font-black leading-7 text-[#1769e0] dark:text-[#4da3ff]">
            Knowledge fuels a brighter tomorrow.
          </p>
          <div class="mx-auto mt-4 h-1 w-24 rotate-[-2deg] bg-[#4f8fe8]"></div>
        </div>
        <span class="absolute left-0 top-8 rotate-[-6deg] text-sm font-bold text-[#1769e0] dark:text-[#4da3ff]"
          >⚗ Science</span
        >
        <span class="absolute right-0 top-12 rotate-[4deg] text-sm font-bold text-[#1769e0] dark:text-[#4da3ff]"
          >⚙ Technology</span
        >
        <span class="absolute bottom-16 left-0 rotate-[3deg] text-sm font-bold text-[#1769e0] dark:text-[#4da3ff]"
          >♜ History</span
        >
        <span class="absolute bottom-4 right-2 rotate-[-4deg] text-sm font-bold text-[#1769e0] dark:text-[#4da3ff]"
          >◉ Culture</span
        >
      </div>
    </div>
  </header>
</template>

<script>
export default { name: "HeroSection" };
</script>
