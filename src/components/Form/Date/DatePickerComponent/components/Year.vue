<script setup lang="ts">
defineProps<{
  years: number[]
}>()

const emit = defineEmits<{
  (e: 'updateYear', value: number): void
}>()
</script>

<template>
    <div class="tc-flex tc-flex-wrap">
        <div v-for="(year, key) in years" :key="key" class="tc-w-1/2 tc-px-0.5">
      <span class="tc-flex tc-rounded-md tc-mt-1.5">
        <button
          type="button"
          class="tc-px-3 tc-py-2 tc-block tc-w-full tc-leading-6 tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none uppercase dark:tc-bg-vtd-secondary-800 dark:hover:tc-bg-vtd-secondary-700 dark:tc-text-vtd-secondary-300 dark:hover:tc-text-vtd-secondary-100 dark:focus:tc-bg-vtd-secondary-700"
          @click="emit('updateYear', year)"
          v-text="year"
        />
      </span>
        </div>
    </div>
</template>

