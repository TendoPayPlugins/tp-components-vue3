<!-- Meow.story.vue -->
<template>
  <Story>
    <drop-down-actions
      :actions="actions"
      position="right"
    />
  </Story>
</template>

<script setup>
import { DropDownActions } from '@/components'
import {computed} from "vue";

const actions = computed(() => {
  return [
    {
      label: 'Test',
      $click: () => {
        alert('test')
      }
    },
    {
      label: 'Test 2',
      $click: () => {
        alert('test 2')
      }
    }
  ]
})
</script>