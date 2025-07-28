<script setup lang="ts">
import type { Ref } from 'vue'
import { computed } from 'vue'
import { injectStrict } from '../utils'
import {
  setToCustomShortcutKey,
  setToLastDayKey,
  setToLastMonthKey,
  setToThisMonthKey,
  setToTodayKey,
  setToYesterdayKey,
} from '../keys'

const props = defineProps<{
  shortcuts: boolean | (() => { label: string; atClick: () => Date[] }[])
  close?: (ref?: Ref | HTMLElement) => void
  asRange: boolean
  asSingle: boolean
  i18n: {
    today: string
    yesterday: string
    past: (period: number) => string
    currentMonth: string
    pastMonth: string
  }
}>()

const setToToday = injectStrict(setToTodayKey)
const setToYesterday = injectStrict(setToYesterdayKey)
const setToLastDay = injectStrict(setToLastDayKey)
const setToThisMonth = injectStrict(setToThisMonthKey)
const setToLastMonth = injectStrict(setToLastMonthKey)
const setToCustomShortcut = injectStrict(setToCustomShortcutKey)

const withShortcut = computed(() => {
  return typeof props.shortcuts === 'function' ? props.shortcuts() : false
})
</script>

<template>
    <div
            v-if="(props.asRange && props.asSingle) || (props.asRange && !props.asSingle)"
            class="tc-relative tc-w-full tc-border-t tc-border-b-0 sm:tc-border-t-0 sm:tc-border-b lg:tc-border-b-0 lg:tc-border-r tc-border-black/[.1] tc-order-last sm:tc-order-none dark:tc-border-vtd-secondary-700/[1] sm:tc-mt-1 lg:tc-mr-1 sm:tc-mb-1 lg:tc-mb-0 sm:tc-mx-1 lg:tc-mx-0 sm:tc-w-auto"
    >
        <ol
                v-if="withShortcut"
                class="tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
        >
            <li v-for="(item, i) in withShortcut" :key="i">
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToCustomShortcut(item, close)" v-text="item.label"
                />
            </li>
        </ol>
        <ol
                v-else
                class="tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
        >
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToToday(close)"
                >
                    {{ props.i18n.today }}
                </a>
            </li>
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToYesterday(close)"
                >
                    {{ props.i18n.yesterday }}
                </a>
            </li>
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToLastDay(7, close)"
                >
                    {{ props.i18n.past(7) }}
                </a>
            </li>
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToLastDay(30, close)"
                >
                    {{ props.i18n.past(30) }}
                </a>
            </li>
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToThisMonth(close)"
                >
                    {{ props.i18n.currentMonth }}
                </a>
            </li>
            <li>
                <a
                        href="#"
                        class="tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300"
                        @click.prevent="setToLastMonth(close)"
                >
                    {{ props.i18n.pastMonth }}
                </a>
            </li>
        </ol>
    </div>
</template>

