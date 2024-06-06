<template>
  <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
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
    <div class="sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700" v-if="showResults">
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
          class="isolate inline-flex -space-x-px rounded-md text-xxs justify-center items-center divide-x"
        >
          <div class="px-3 justify-center uppercase">
              <button
                data-test="pagination-prev-button"
                :disabled="!pagination.has_prev"
                class="relative inline-flex items-center uppercase font-semibold text-xxs text-gray-700 hover:text-gray-400"
                @click="goPrev()"
              >
                <ChevronLeftIcon
                  aria-hidden="true"
                  class="h-3 w-3 mr-2"
                />
                <span>Previous</span>
              </button>
          </div>

          <div class="px-3 justify-center inline-flex">
              <select :value="pagination.current_page" @change="goPage($event.target.value)"
                data-test="pagination-select-page"
                class="justify-center block px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option v-for="(option, index) in options(pagination.last_page)" :key="index" :value="option">{{ option }}</option>
              </select>
          </div>

          <div class="px-3 justify-center font-normal ml-2">
              out of <span class="font-semibold">{{ pagination.last_page }}</span>
          </div>

          <div class="px-3 justify-center uppercase">
            <button
              data-test="pagination-next-button"
              :disabled="!pagination.has_next"
              class="relative inline-flex items-center uppercase font-semibold text-xxs text-gray-700 hover:text-gray-400"
              @click="goNext()"
            >
              <span>Next</span>
              <ChevronRightIcon
                aria-hidden="true"
                class="h-3 w-3 ml-2"
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
