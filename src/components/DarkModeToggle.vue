<template>
  <div id="dark-mode-toggle" class="absolute top-4 right-4 ">
    <label class="flex items-center cursor-pointer">
      <span class="mr-2 text-gray-900 dark:text-gray-100 text-xl">🌙</span>
      <input
        type="checkbox"
        class="hidden"
        :checked="modelValue"
        @change="$emit('update:modelValue', !modelValue); $emit('toggle')"
      />
      <div class="relative">
        <div class="block bg-gray-400 dark:bg-gray-700 w-14 h-7 rounded-full shadow-inner"></div>
        <div
          :class="{
            'translate-x-7': !modelValue,
            'translate-x-0': modelValue,
          }"
          class="absolute left-0 top-0 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900 w-7 h-7 rounded-full shadow transition-transform duration-300"
        ></div>
      </div>
      <span class="ml-2 text-gray-900 dark:text-gray-100 text-xl">🌞</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "DarkModeToggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue", "toggle"],
};
</script>

<style scoped>
#dark-mode-toggle {
  padding: 0;
}
</style>
