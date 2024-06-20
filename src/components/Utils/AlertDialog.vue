<template>
  <div
    class="rounded-md p-4"
    :class="{
      'bg-yellow-50': type === 'warning',
      'bg-green-50': type === 'success',
      'bg-red-50': type === 'error',
      'bg-blue-50': type === 'primary'
    }"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon
          v-if="type === 'success'"
          class="size-5 text-green-400"
          aria-hidden="true"
        />
        <ExclamationTriangleIcon
          v-if="type === 'warning'"
          class="size-5 text-yellow-400"
          aria-hidden="true"
        />
        <XCircleIcon
          v-if="type === 'error'"
          class="size-5 text-red-400"
          aria-hidden="true"
        />
        <InformationCircleIcon
          v-if="type === 'primary'"
          class="size-5 text-blue-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <p
          class="text-sm font-medium"
          :class="{
            'text-yellow-700': type === 'warning',
            'text-green-800': type === 'success',
            'text-red-800': type === 'error',
            'text-blue-400': type === 'primary'}"
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
            type="button"
            class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            @click="onClose"
          >
            <span class="sr-only">Dismiss</span>
            <XMarkIcon
              class="size-5"
              aria-hidden="true"
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
    default: 'success'
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
