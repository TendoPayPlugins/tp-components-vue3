<template>
  <div class="p-5">
    <form-button @click="showConfirmDialog">
      Open Confirm Dialog
    </form-button>
  </div>
</template>

<script setup>
import { useConfirmDialog } from '@/composables'
import { FormButton } from '@/components'

const { showDialog } = useConfirmDialog()

const showConfirmDialog = () => {
  showDialog(
      'Confirmation',
      'Are you sure to update status to X?',
      null,
      [
        { label: 'This and following events', value: 1 },
        { label: 'This event only', value: 2 },
      ]
  ).then(({ result, option }) => {
    if (!result) alert('Cancelled')
    else alert('Completed with option: ' + option)
  })
}
</script>