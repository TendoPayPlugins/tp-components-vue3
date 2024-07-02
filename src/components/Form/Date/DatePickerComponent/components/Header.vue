<script setup lang="ts">
defineProps<{
  panel: {
    calendar: boolean
    month: boolean
    year: boolean
  }
  calendar: {
    date: () => any[]
    month: string
    year: number
    years: () => number[]
    onPrevious: () => void
    onNext: () => void
    onPreviousYear: () => void
    onNextYear: () => void
    openMonth: () => void
    setMonth: ($event: number) => void
    openYear: () => void
    setYear: ($event: number) => void
  }
}>()
</script>

<template>
    <div class="tc-flex tc-justify-between tc-items-center tc-px-2 tc-py-1.5">
        <div class="tc-flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="tc-inline-flex tc-rounded-full">
        <button
                type="button"
                class="tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50"
                @click="
            panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()
          "
        >
          <svg class="tc-w-5 tc-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="panel.calendar
                ? `M15 19l-7-7 7-7`
                : `M11 19l-7-7 7-7m8 14l-7-7 7-7`
              "
            />
          </svg>
        </button>
      </span>
        </div>
        <div class="tc-px-1.5 tc-space-x-1.5 tc-flex tc-flex-1">
      <span class="tc-flex-1 tc-flex tc-rounded-md">
        <button
                type="button"
                class="tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-xs 2xl:tc-text-sm tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50"
                @click="calendar.openMonth()" v-text="calendar.month"
        />
      </span>
            <span class="tc-flex-1 tc-flex tc-rounded-md">
        <button
                type="button"
                class="tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-xs 2xl:tc-text-sm tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50"
                @click="calendar.openYear()" v-text="calendar.year"
        />
      </span>
        </div>
        <div class="tc-flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="tc-inline-flex tc-rounded-full">
        <button
                type="button"
                class="tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50"
                @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg class="tc-w-5 tc-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            />
          </svg>
        </button>
      </span>
        </div>
    </div>
</template>

