<template>
  <span
    :class="[
      baseClasses,
      sizeClasses[size] || sizeClasses['sm'],
      colorClasses[color] || colorClasses['default']
    ]"
  >
    <slot />
    <slot
      name="icon"
      class="tc-ml-2"
    />
  </span>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'sm',
  },
  color: {
    type: String,
    default: 'default',
  },
})

const baseClasses = 'tc-font-semibold tc-rounded-md tc-inline-flex tc-items-center'

const sizeClasses = {
  xs: 'tc-text-[10px] tc-px-1 tc-py-0.5',
  sm: 'tc-text-xs tc-px-2 tc-py-0.5',
  md: 'tc-text-sm tc-px-2.5 tc-py-1',
  lg: 'tc-text-base tc-px-3 tc-py-1.5',
  xl: 'tc-text-lg tc-px-4 tc-py-2',
}

const colorClasses = {
  default: 'tc-bg-gray-500 tc-text-white',
  purple: 'tc-bg-tonik-purple tc-text-white',
  blue: 'tc-bg-tendo-blue tc-text-white',
  white: 'tc-bg-gray-300 tc-text-black',
  black: 'tc-bg-black tc-text-white',
  gray: 'tc-bg-gray-600 tc-text-white',
  light: 'tc-bg-gray-300 tc-text-black',
  success: 'tc-bg-green-600 tc-text-white',
  warning: 'tc-bg-yellow-500 tc-text-white',
  danger: 'tc-bg-red-600 tc-text-white',
  error: 'tc-bg-red-700 tc-text-white',
  info: 'tc-bg-blue-400 tc-text-white',
  primary: 'tc-bg-indigo-600 tc-text-white',
  secondary: 'tc-bg-pink-500 tc-text-white',
  accent: 'tc-bg-fuchsia-500 tc-text-white',
  transparent: 'tc-bg-transparent tc-border tc-border-gray-400 tc-text-gray-700',
}
</script>
