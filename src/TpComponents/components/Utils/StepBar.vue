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
      class="flex items-center"
      role="list"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[
          stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
          'relative',
        ]"
      >
        <template v-if="step.status === 'complete'">
          <div
            aria-hidden="true"
            class="absolute inset-0 flex items-center"
          >
            <div class="h-0.5 w-full bg-tp-primary" />
          </div>
          <a
            class="cursor-pointer relative flex h-8 w-8 items-center justify-center rounded-full bg-tp-primary hover:bg-tp-primary-dark"
            @click="onInput(step)"
          >
            <CheckIcon
              class="size-5 text-white"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'">
          <div
            aria-hidden="true"
            class="cursor-pointer absolute inset-0 flex items-center"
          >
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            aria-current="step"
            class="cursor-pointer relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-tp-primary bg-white"
            @click="onInput(step)"
          >
            <span
              aria-hidden="true"
              class="h-2.5 w-2.5 rounded-full bg-tp-primary"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div
            aria-hidden="true"
            class="absolute inset-0 flex items-center"
          >
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            class="cursor-pointer group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
            @click="onInput(step)"
          >
            <span
              aria-hidden="true"
              class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>
