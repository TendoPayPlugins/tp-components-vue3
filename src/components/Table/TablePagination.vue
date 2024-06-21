<template>
  <div class="tc-flex tc-items-center tc-justify-between tc-border-t tc-border-gray-200 tc-bg-white tc-px-4 tc-py-3 sm:tc-px-6">
<!--    <div class="flex flex-1 justify-between sm:hidden">-->
<!--      <a-->
<!--        href="#"-->
<!--        class="relative inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-400"-->
<!--      >-->
<!--        <ChevronLeftIcon-->
<!--          class="size-5 text-gray-400"-->
<!--          aria-hidden="true"-->
<!--        />-->
<!--        <span class="uppercase font-semibold text-xxs">Previous</span>-->
<!--      </a>-->
<!--      <a-->
<!--        href="#"-->
<!--        class="relative ml-3 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-400"-->
<!--      >-->
<!--        <span class="uppercase font-semibold text-xxs">Next</span>-->
<!--        <ChevronRightIcon-->
<!--          class="size-5 text-gray-400"-->
<!--          aria-hidden="true"-->
<!--        />-->
<!--      </a>-->
<!--    </div>-->
    <div class="sm:tc-flex sm:tc-flex-1 sm:tc-items-center sm:tc-justify-between">
      <div>
        <p class="tc-text-sm tc-text-gray-700" v-if="showResults">
          Showing
          {{ ' ' }}
          <span data-test="pagination-from">{{ pagination?.from || 0 }}</span>
          {{ ' ' }}
          -
          {{ ' ' }}
          <span data-test="pagination-to">{{ pagination?.to || 0 }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span data-test="pagination-total">{{ pagination?.total || 0 }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav
          aria-label="Pagination"
          class="tc-isolate tc-inline-flex -tc-space-x-px tc-rounded-md tc-text-xxs tc-justify-center tc-items-center"
        >
          <div class="tc-px-3 tc-justify-center tc-uppercase">
              <button
                data-test="pagination-prev-button"
                :disabled="!pagination.has_prev"
                class="tc-relative tc-inline-flex tc-uppercase tc-font-semibold tc-text-xxs tc-text-gray-700 hover:tc-text-gray-400"
                @click="goPrev()"
              >
                <ChevronLeftIcon
                  aria-hidden="true"
                  class="tc-h-3 tc-w-3 tc-mr-2"
                />
                <span>Previous</span>
              </button>
          </div>

          <div class="tc-text-gray-300">|</div>

          <div class="tc-pl-3 tc-justify-center tc-inline-flex">
              <select :value="pagination.current_page" @change="goPage($event.target.value)"
                data-test="pagination-select-page"
                class="tc-justify-center tc-block tc-px-2 tc-py-1 tc-text-sm tc-border tc-border-gray-300 tc-rounded-md focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-blue-500 focus:tc-border-blue-500">
                  <option v-for="(option, index) in options(pagination.last_page)" :key="index" :value="option">{{ option }}</option>
              </select>
          </div>

          <div class="tc-px-3 tc-justify-center tc-font-normal">
              out of <span class="tc-font-semibold">{{ pagination.last_page }}</span>
          </div>

          <div class="tc-text-gray-300">|</div>

          <div class="tc-px-3 tc-justify-center tc-uppercase">
            <button
              data-test="pagination-next-button"
              :disabled="!pagination.has_next"
              class="tc-relative tc-inline-flex tc-items-center tc-uppercase tc-font-semibold tc-text-xxs tc-text-gray-700 hover:tc-text-gray-400"
              @click="goNext()"
            >
              <span>Next</span>
              <ChevronRightIcon
                aria-hidden="true"
                class="tc-h-3 tc-w-3 tc-ml-2"
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/24/solid'

const emit = defineEmits(['page'])

const props = defineProps({
  pagination: {
    type: Object,
    required: true,
    default: () => {
      return {
        current_page: 1,
        last_page: 1,
        to: 0,
        from: 0,
        total: 0,
        has_prev: false,
        has_next: false,
      }
    }
  },
  showResults: {
    type: Boolean,
    default: true
  }
})

function options(max) {
  var result = [];

  for (let i = 1; i <= max; i++) {
    result.push(i);
  }

  return result;
}

const goPrev = () => {
  emit('page', props.pagination.current_page - 1)
}

const goNext = () => {
  emit('page', props.pagination.current_page + 1)
}

const goPage = (page) => {
  emit('page', page)
}

</script>
