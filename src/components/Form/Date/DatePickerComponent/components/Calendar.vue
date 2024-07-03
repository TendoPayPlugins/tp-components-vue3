<script setup lang="ts">
import { injectStrict } from '../utils'
import {
  atMouseOverKey,
  betweenRangeClassesKey,
  datepickerClassesKey,
  isBetweenRangeKey,
} from '../keys'

defineProps<{
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
  weeks: string[]
  weekNumber: boolean
  asRange: boolean
}>()

const emit = defineEmits<{
  (e: 'updateDate', event: any): void
}>()

const isBetweenRange = injectStrict(isBetweenRangeKey)
const betweenRangeClasses = injectStrict(betweenRangeClassesKey)
const datepickerClasses = injectStrict(datepickerClassesKey)
const atMouseOver = injectStrict(atMouseOverKey)
</script>

<template>
    <div class="tc-grid tc-grid-cols-7 tc-gap-y-0.5 tc-my-1">
        <transition-group
                enter-from-class="tc-opacity-0" enter-to-class="tc-opacity-100"
                enter-active-class="tc-transition-opacity tc-ease-out tc-duration-300"
                leave-active-class="tc-transition-opacity tc-ease-in tc-duration-200" leave-from-class="tc-opacity-100"
                leave-to-class="tc-opacity-0"
        >
            <template v-for="(date, keyDate) in calendar.date()" :key="keyDate">
                <div v-if="keyDate % 7 === 0 && weekNumber" class="tc-col-span-7 tc-border-b tc-relative dark:tc-border-vtd-secondary-600">
                    <span class="tc-absolute tc--left-2 tc-top-1/2 tc--translate-y-2/4 tc-bg-white dark:tc-bg-vtd-secondary-800 tc-text-[8px] tc-pr-2 tc-text-vtd-secondary-400">{{ date.week() }}</span>
                </div>
                <div class="tc-relative" :class="{ 'vtd-tooltip': asRange && date.duration() }" :data-tooltip="`${date.duration()}`">
                    <transition
                            enter-from-class="tc-opacity-0" enter-to-class="tc-opacity-100"
                            enter-active-class="tc-transition-opacity tc-ease-out tc-duration-200"
                            leave-active-class="tc-transition-opacity tc-ease-in tc-duration-150" leave-from-class="tc-opacity-100"
                            leave-to-class="tc-opacity-0"
                    >
            <span
                    v-if="isBetweenRange(date) || date.hovered()"
                    class="tc-absolute tc-bg-light-blue-1 tc-bg-opacity-60 dark:tc-bg-vtd-secondary-700 dark:tc-bg-opacity-50"
                    :class="betweenRangeClasses(date)"
            />
                    </transition>
                    <button
                            type="button"
                            class="vtd-datepicker-date tc-relative tc-w-[2.7rem] tc-h-[2.7rem] lg:tc-w-10 lg:tc-h-10 tc-flex tc-justify-center tc-items-center tc-text-xs 2xl:tc-text-sm"
                            :class="[
              datepickerClasses(date),
              asRange ? 'tc-transition-all' : 'tc-transition-colors',
            ]" :disabled="date.disabled || date.inRange()" :data-date="date.toDate()" @click="emit('updateDate', date)"
                            @mouseenter="atMouseOver(date)" @focusin="atMouseOver(date)" v-text="date.date()"
                    />
                </div>
            </template>
        </transition-group>
    </div>
</template>

