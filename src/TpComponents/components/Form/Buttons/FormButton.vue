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
    :class="['font-bold rounded text-sm',
             disabled ? 'bg-tp-grey-300 text-white' :
             type === 'gray' ? 'bg-tp-grey-300 text-gray-400' :
             type === 'black-outline' ? 'bg-transparent border-2 border-tp-grey-600 rounded-md px-4 py-2' :
             type === 'primary' ? 'bg-tp-primary hover:bg-tp-primary-dark text-white' :
             type === 'primary-outline' ? 'bg-transparent text-tp-primary border-tp-primary border hover:bg-tp-primary hover:text-white' :
             type === 'secondary' ? 'bg-tp-secondary hover:bg-tp-secondary-dark text-gray-800' :
             type === 'secondary-outline' ? 'bg-transparent text-tp-secondary border-tp-secondary border hover:bg-tp-secondary hover:text-white' :
             'bg-blue-500 text-white hover:bg-blue-700',
             size === 'sm' ? 'text-sm px-8 py-3' : type === 'md' ? 'text-base px-8 py-3' : 'text-lg px-8 py-3'
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
