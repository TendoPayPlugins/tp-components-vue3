<template>
  <Story class="tc-p-5">
    <countdown-component
      :time="15"
      :play="true"
      @reload="reload"
    />
  </Story>
</template>

<script setup>
import { CountdownComponent } from '@/components'

const reload = () => {
  alert('Reload')
}
</script>