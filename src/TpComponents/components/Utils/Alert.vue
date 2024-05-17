<template>
  <div
    :class="{
      'bg-yellow-50': type === 'warning',
      'bg-green-50': type === 'success',
      'bg-red-50': type === 'error',
      'bg-blue-50': type === 'primary'
    }"
    class="rounded-md p-4"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon
          v-if="type === 'success'"
          aria-hidden="true"
          class="h-5 w-5 text-green-400"
        />
        <ExclamationTriangleIcon
          v-if="type === 'warning'"
          aria-hidden="true"
          class="h-5 w-5 text-yellow-400"
        />
        <XCircleIcon
          v-if="type === 'error'"
          aria-hidden="true"
          class="h-5 w-5 text-red-400"
        />
        <InformationCircleIcon
          v-if="type === 'primary'"
          aria-hidden="true"
          class="h-5 w-5 text-blue-400"
        />
      </div>
      <div class="ml-3">
        <p
          :class="{
            'text-yellow-700': type === 'warning',
            'text-green-800': type === 'success',
            'text-red-800': type === 'error',
            'text-blue-400': type === 'primary'}"
          class="text-sm font-medium"
        >
          {{ message }}
        </p>
        <slot class="mt-2 text-sm" />
      </div>

      <div
        v-if="close"
        class="ml-auto pl-3"
      >
        <div class="-mx-1.5 -my-1.5">
          <button
            class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            type="button"
            @click="onClose"
          >
            <span class="sr-only">Dismiss</span>
            <XMarkIcon
              aria-hidden="true"
              class="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon
} from '@heroicons/vue/20/solid'

const emit = defineEmits(['close'])

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'success' // @todo add error, warning etc
  },
  close: {
    type: Boolean,
    default: false,
  }
})

const onClose = () => {
  emit("close");
};
</script>