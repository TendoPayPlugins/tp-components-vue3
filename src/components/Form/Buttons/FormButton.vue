<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "primary",
  },
  dataTest: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md'
  }
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :class="[
      'tc-font-bold tc-rounded tc-text-base',
      disabled ? 'tc-bg-tp-grey-300 tc-text-white' :
      type === 'danger' ? 'tc-bg-red-500 tc-text-white hover:tc-bg-red-600 focus:tc-outline-none' :
      type === 'gray' ? 'tc-bg-tp-grey-300 tc-text-gray-400' :
      type === 'black-outline' ? 'tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2' :
      type === 'primary' ? 'tc-bg-tonik-purple hover:tc-bg-tonik-purple-dark tc-text-white' :
      type === 'primary-outline' ? 'tc-bg-transparent tc-text-tp-primary tc-border-tp-primary tc-border hover:tc-bg-tp-primary hover:tc-text-white' :
      type === 'secondary' ? 'tc-bg-tp-secondary hover:tc-bg-tp-secondary-dark tc-text-gray-800' :
      type === 'secondary-outline' ? 'tc-bg-transparent tc-text-tp-secondary tc-border-tp-secondary tc-border hover:tc-bg-tp-secondary hover:tc-text-white' :
      'tc-bg-blue-500 tc-text-white hover:tc-bg-blue-700',
      size === 'sm' ? 'tc-text-sm tc-px-4 tc-py-2' : size === 'md' ? 'tc-text-base tc-px-5 tc-py-3' : size === 'xs' ? 'tc-text-xs tc-px-2 tc-py-1' : 'tc-text-lg tc-px-8 tc-py-3'
    ]"
    :data-test="dataTest + '-button'"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot :data-test="dataTest + '-text'">
      {{ dataTest }}
    </slot>
  </button>
</template>
