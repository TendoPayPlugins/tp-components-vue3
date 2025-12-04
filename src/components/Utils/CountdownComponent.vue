<template>
  <div class="tc-flex tc-items-center tc-space-x-2 tc-text-base tc-text-gray-700">
    <span>Page will be reloaded after {{ secondsLeft }} sec.</span>

    <form-button
      size="sm"
      @click="toggle"
    >
      <component
        :is="isRunning ? PauseIcon : PlayIcon"
        class="tc-w-4 tc-h-4"
      />
    </form-button>

    <form-button
      size="sm"
      @click="emit('reload')"
    >
      <arrow-path-icon class="tc-w-4 tc-h-4" />
    </form-button>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/vue/20/solid'
import { FormButton } from 'tp-components-vue3'

const props = defineProps({
  seconds: {
    type: Number,
    default: 30
  }
})

const emit = defineEmits(['reload'])

const secondsLeft = ref(props.seconds)
const isRunning = ref(false)
let interval = null

function startTimer() {
  if (interval) return
  interval = setInterval(() => {
    if (secondsLeft.value > 0) {
      secondsLeft.value--
    } else {
      secondsLeft.value = props.seconds
      emit('reload')
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(interval)
  interval = null
}

function toggle() {
  isRunning.value = !isRunning.value
  isRunning.value ? startTimer() : stopTimer()
}

onBeforeUnmount(() => {
  stopTimer()
})
</script>
