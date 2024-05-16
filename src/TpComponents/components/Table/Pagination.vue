<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.from || 0 }}</span>
                    {{ ' ' }}
                    -
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.to || 0 }}</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.total || 0 }}</span>
                    {{ ' ' }}
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button @click="goPrev()" :disabled="!pagination.has_prev" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 mr-2">
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                        <span>Previous</span>
                    </button>
                    {{ pagination.current_page }} out of {{ pagination.last_page }}
                    <button @click="goNext()" :disabled="!pagination.has_next" class="ml-2 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span>Next</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const emit = defineEmits(['page'])

const setData = (inputData) => {

}

const props = defineProps({
  pagination: {
    type: Object,
    required: true,
    default: {
      current_page: 1,
      last_page: 1,
      to: 0,
      from: 0,
      total: 0,
      has_prev: false,
      has_next: false,
    }
  },
})
const goPrev = () => {
    emit('page', props.pagination.current_page - 1)
}

const goNext = () => {
    emit('page', props.pagination.current_page + 1)
}

</script>
