<!-- Meow.story.vue -->
<template>
  <Story>
    <drop-down-actions
      :actions="actions"
      position="right"
      :item="'test1'"
    />
  </Story>
</template>

<script setup>
import { DropDownActions } from '@/components'
import {computed} from "vue";

const actions = (row) => {
  console.log('Actions input item', row)
  return [
    {
      label: 'Test',
      show: row === 'test1',
      $click: (item, close) => {
        alert('Test')
        console.log(item)
      }
    },
    {
      label: 'Test 2',
      show: row === 'test2',
      $click: (item, close) => {
        alert('Test 2')
        console.log(item)
      }
    }
  ]
}
</script>