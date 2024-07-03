<template>
  <div
    class="tc-rounded-md tc-p-4"
    :class="{
      'tc-bg-yellow-50': type === 'warning',
      'tc-bg-green-2': type === 'success',
      'tc-bg-error-light': type === 'error',
      'tc-bg-info': type === 'primary'
    }"
  >
    <div class="tc-flex">
      <div class="tc-flex-shrink-0">
        <CheckCircleIcon
          v-if="type === 'success'"
          class="tc-size-5 tc-text-success"
          aria-hidden="true"
        />
        <ExclamationTriangleIcon
          v-if="type === 'warning'"
          class="tc-size-5 tc-text-yellow-400"
          aria-hidden="true"
        />
        <XCircleIcon
          v-if="type === 'error'"
          class="tc-size-5 tc-text-error"
          aria-hidden="true"
        />
        <InformationCircleIcon
          v-if="type === 'primary'"
          class="tc-size-5 tc-text-tendo-blue"
          aria-hidden="true"
        />
      </div>
      <div class="tc-ml-3">
        <p
          class="tc-text-sm tc-font-medium"
          :class="{
            'tc-text-yellow-700': type === 'warning',
            'tc-text-success': type === 'success',
            'tc-text-error': type === 'error',
            'tc-text-tendo-blue': type === 'primary'}"
        >
          {{ message }}
        </p>
        <slot class="tc-mt-2 tc-text-sm" />
      </div>

      <div
        v-if="close"
        class="tc-ml-auto tc-pl-3"
      >
        <div class="-tc-mx-1.5 -tc-my-1.5">
          <button
            type="button"
            class="tc-inline-flex tc-rounded-md tc-bg-green-2 tc-p-1.5 tc-text-success hover:tc-bg-green-100 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-green-600 focus:tc-ring-offset-2 focus:tc-ring-offset-green-50"
            @click="onClose"
          >
            <span class="tc-sr-only">Dismiss</span>
            <XMarkIcon
              class="tc-size-5"
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
