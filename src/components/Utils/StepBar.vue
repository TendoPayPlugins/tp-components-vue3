<script setup>

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
            <div class="tc-h-1.5 tc-w-full tc-bg-green-1" />
          </div>
          <a
            class="tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-bg-green-1 hover:tc-bg-green-1"
            @click="onInput(step)"
          >
              <svg width="14" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.83398 4.41667L5.16732 6.91667L11.0007 1.5" stroke="#1F2931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'">
          <div
            aria-hidden="true"
            class="tc-cursor-pointer tc-absolute tc-inset-0 tc-flex tc-items-center"
          >
            <div class="tc-h-1.5 tc-w-full tc-bg-grey-2" />
          </div>
          <a
            aria-current="step"
            class="tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-green-1 bg-white"
            @click="onInput(step)"
          >
            <span
              aria-hidden="true"
              class="tc-h-1.5 tc-w-2.5 tc-rounded-full tc-bg-white"
            />
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div
            aria-hidden="true"
            class="tc-absolute tc-inset-0 tc-flex tc-items-center"
          >
            <div class="tc-h-1.5 tc-w-full tc-bg-grey-2" />
          </div>
          <a
            class="tc-cursor-pointer tc-group tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-grey-2 tc-bg-white"
            @click="onInput(step)"
          >
            <span class="tc-sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>
