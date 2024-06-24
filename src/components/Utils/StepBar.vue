<script setup>
import {CheckIcon} from '@heroicons/vue/24/solid'

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["click"]);

const onInput = (step) => {
  emit("click", step);
};
</script>

<template>
  <nav aria-label="Progress">
    <ol
      class="tc-flex tc-items-center"
      role="list"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[
          stepIdx !== steps.length - 1 ? 'tc-pr-8 sm:tc-pr-20' : '',
          'tc-relative',
        ]"
      >
        <template v-if="step.status === 'complete'">
          <div
            aria-hidden="true"
            class="tc-absolute tc-inset-0 tc-flex tc-items-center"
          >
            <div class="tc-h-0.5 tc-w-full tc-bg-tp-primary" />
          </div>
          <a
            class="tc-cursor-pointer tc-relative tc-flex tc-h-8 tc-w-8 tc-items-center tc-justify-center tc-rounded-full tc-bg-tp-primary hover:tc-bg-tp-primary-dark"
            @click="onInput(step)"
          >
            <CheckIcon
              class="tc-size-5 tc-text-white"
              aria-hidden="true"
            />
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'">
          <div
            aria-hidden="true"
            class="tc-cursor-pointer tc-absolute tc-inset-0 tc-flex tc-items-center"
          >
            <div class="tc-h-0.5 tc-w-full tc-bg-gray-200" />
          </div>
          <a
            aria-current="step"
            class="tc-cursor-pointer tc-relative tc-flex tc-h-8 tc-w-8 tc-items-center tc-justify-center tc-rounded-full tc-border-2 tc-border-tp-primary bg-white"
            @click="onInput(step)"
          >
            <span
              aria-hidden="true"
              class="tc-h-2.5 tc-w-2.5 tc-rounded-full tc-bg-tp-primary"
            />
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div
            aria-hidden="true"
            class="tc-absolute tc-inset-0 tc-flex tc-items-center"
          >
            <div class="tc-h-0.5 tc-w-full tc-bg-gray-200" />
          </div>
          <a
            class="tc-cursor-pointer tc-group tc-relative tc-flex tc-h-8 tc-w-8 tc-items-center tc-justify-center tc-rounded-full tc-border-2 tc-border-gray-300 tc-bg-white hover:tc-border-gray-400"
            @click="onInput(step)"
          >
            <span
              aria-hidden="true"
              class="tc-h-2.5 tc-w-2.5 tc-rounded-full tc-bg-transparent group-hover:tc-bg-gray-300"
            />
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>
