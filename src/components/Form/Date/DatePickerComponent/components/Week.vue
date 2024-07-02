<script setup lang="ts">
import type { LengthArray } from '../types'

defineProps<{
  weeks: LengthArray<string, 7>
}>()
</script>

<template>
    <div class="tc-grid tc-grid-cols-7 tc-py-2 tc-mt-0.5">
        <div
          v-for="(day, keyDay) in weeks"
          :key="keyDay"
          class="tc-text-vtd-secondary-500 tc-text-xs 2xl:tc-text-sm tc-tracking-wide tc-font-medium tc-text-center tc-cursor-default dark:tc-text-vtd-secondary-400"
        >
            <span v-text="day" />
        </div>
    </div>
</template>

