<template>
  <div class="tc-relative tc-inline-block">
    <div class="tc-flex tc-items-center">
      <slot />
      <div
        class="tc-relative tc-flex tc-items-center"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <slot name="icon">
          <question-mark-circle-icon class="tc-w-5 tc-h-5 tc-ml-2 tc-text-tonik-purple tc-cursor-pointer" />
        </slot>
        <div
          v-if="isHovered"
          :class="[
            'tc-absolute tc-z-10 tc-bg-gray-800 tc-text-white tc-text-sm tc-rounded tc-p-3 tc-whitespace-nowrap tc-transition-opacity tc-duration-300',
            positionClasses
          ]"
        >
          {{ text }}
          <slot name="html" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: () => null
  },
  position: {
    type: String,
    default: 'top',
    validator: (val) => ['top', 'bottom', 'left', 'right'].includes(val)
  }
})

const isHovered = ref(false)

const positionClasses = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'tc-top-full tc-mt-2 tc-left-1/2 -tc-translate-x-1/2'
    case 'left':
      return 'tc-right-full tc-mr-2 tc-top-1/2 -tc-translate-y-1/2'
    case 'right':
      return 'tc-left-full tc-ml-2 tc-top-1/2 -tc-translate-y-1/2'
    case 'top':
    default:
      return 'tc-bottom-full tc-mb-2 tc-left-1/2 -tc-translate-x-1/2'
  }
})
</script>