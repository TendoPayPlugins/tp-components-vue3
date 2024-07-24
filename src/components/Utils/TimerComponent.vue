<script setup>
import { ref, reactive, watch, onBeforeUnmount, onMounted } from 'vue';
import { PlayIcon, StopIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['update:value', 'callback']);

const tpTimerOptions = reactive({
  play: false,
  interval: 60,
  remain: props.value,
  timeout: 1000,
  ...props.options,
});

let TpTimerId = null;

const togglePlay = () => {
  tpTimerOptions.play = !tpTimerOptions.play;

  if (tpTimerOptions.play) {
    playTimer();
  } else {
    stopTimer();
  }
};

const playTimer = () => {
  if (TpTimerId) {
    stopTimer();
  }

  tpTimerOptions.play = true;
  TpTimerId = window.setInterval(() => {
    const { remain, interval } = tpTimerOptions;
    tpTimerOptions.remain = remain > 0 ? remain - 1 : interval;
    if (tpTimerOptions.remain === 0) {
      emit('callback');
    }
    emit('update:value', tpTimerOptions.remain);
  }, tpTimerOptions.timeout);
};

const stopTimer = () => {
  tpTimerOptions.play = false;
  if (TpTimerId) {
    window.clearInterval(TpTimerId);
    TpTimerId = null;
  }
};

onMounted(() => {
  if (tpTimerOptions.play) {
    playTimer();
  }
});

onBeforeUnmount(() => {
  stopTimer();
});
</script>

<template>
  <div class="tc-flex tc-items-center">
    <slot>
      <div class="mx-2">
        {{ tpTimerOptions.remain }}
      </div>
    </slot>
    <button
      class="tc-border-1"
      @click="togglePlay"
    >
      <PlayIcon
        v-if="!tpTimerOptions.play"
        class="tc-h-5 tc-w-5 tc-text-gray-500"
      />
      <StopIcon
        v-else
        class="tc-h-5 tc-w-5 tc-text-gray-500"
      />
    </button>
  </div>
</template>

<style scoped>
</style>
